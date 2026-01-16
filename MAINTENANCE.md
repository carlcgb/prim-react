# PRIMLogix Website Maintenance Guide

This guide covers everything you need to know for maintaining and updating the PRIMLogix website hosted on WordPress/Google Cloud VM.

## Table of Contents
- [WordPress Theme Structure](#wordpress-theme-structure)
- [Build & Deployment Workflow](#build--deployment-workflow)
- [Quick Reference Commands](#quick-reference-commands)
- [Editing Workflow from Cursor](#editing-workflow-from-cursor)
- [Important Files & Their Purposes](#important-files--their-purposes)
- [Troubleshooting](#troubleshooting)

---

## WordPress Theme Structure

The WordPress theme is located at:
```
/var/www/html/wp-content/themes/primlogix-theme/
```

### Theme Directory Structure

```
primlogix-theme/
├── dist/                          # Built React app (DO NOT EDIT DIRECTLY)
│   ├── manifest.json              # Vite asset manifest (auto-generated)
│   ├── index.html                 # Home page entry
│   ├── solutions.html             # Solutions page entry
│   ├── industries.html            # Industries page entry
│   ├── resources.html             # Resources page entry
│   ├── pricing.html               # Pricing page entry
│   ├── company.html               # Company page entry
│   └── assets/                    # Hashed CSS/JS files (auto-generated)
│       ├── main-*.js              # Main JavaScript bundle
│       ├── animations-*.css       # Animation styles
│       └── [page]-*.js            # Page-specific bundles
├── index.php                      # Universal WordPress template (copied from template-index.php)
├── functions.php                  # WordPress functions (uses functions-enhanced.php)
├── style.css                      # WordPress theme header (required)
└── .htaccess                      # Apache rewrite rules for permalinks
```

### Local WordPress Files (in `wordpress/` folder)

```
wordpress/
├── functions-enhanced.php          # Enhanced PHP functions (active on server)
├── functions.php                  # Basic PHP functions (backup)
├── template-index.php             # Universal template (source for index.php)
└── .htaccess                      # Apache rewrite rules
```

**Note:** Files in `wordpress/` are source files. The active theme uses `functions-enhanced.php` as `functions.php` and `template-index.php` as `index.php`.

---

## Build & Deployment Workflow

### Step 1: Make Your Changes in Cursor

Edit files in the `src/` directory:
- `src/components/` - React components (header, footer, hero, etc.)
- `src/data/content.js` - All text content, links, images
- `src/styles/main.css` - Global styles and animations
- `src/pages/` - Page templates
- `src/entries/` - Page entry points

### Step 2: Build the Project

From the project root (`c:\Users\carl\Documents\prim-react`):

```powershell
# Build the React app
.\node_modules\.bin\vite build

# Copy manifest.json to dist root (required for WordPress)
Copy-Item dist\.vite\manifest.json dist\manifest.json -Force
```

**Alternative (if vite is in PATH):**
```powershell
npm run build
Copy-Item dist\.vite\manifest.json dist\manifest.json -Force
```

### Step 3: Create Deployment Package

```powershell
# Navigate to dist folder
cd dist

# Create zip archive
Compress-Archive -Path * -DestinationPath ..\primlogix-dist.zip -Force

# Return to project root
cd ..
```

### Step 4: Upload to Google Cloud VM

```powershell
# Upload zip to VM
gcloud compute scp primlogix-dist.zip wordpress-prim-vm:/tmp/primlogix-dist.zip --zone=us-east1-b
```

### Step 5: Deploy on Server

```powershell
# SSH into VM and deploy
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="cd /var/www/html/wp-content/themes/primlogix-theme && sudo rm -rf dist/* && sudo unzip -o /tmp/primlogix-dist.zip -d dist/ && sudo chown -R www-data:www-data dist/ && sudo chmod -R 755 dist/"
```

**What this command does:**
1. Navigates to theme directory
2. Removes old `dist/` contents
3. Extracts new build from zip
4. Sets correct ownership (`www-data:www-data`)
5. Sets correct permissions (`755`)

### Step 6: Verify Deployment

Visit your site: `https://34.23.76.77` and hard refresh (`Ctrl+F5`) to see changes.

### Step 7: Clear Server Cache (if enabled)

If WordPress caching is enabled, flush cache:

```powershell
wp cache flush --allow-root
```

---

## Quick Reference Commands

### Complete Build & Deploy (One-Liner)

```powershell
# Build
.\node_modules\.bin\vite build; Copy-Item dist\.vite\manifest.json dist\manifest.json -Force

# Package
cd dist; Compress-Archive -Path * -DestinationPath ..\primlogix-dist.zip -Force; cd ..

# Upload
gcloud compute scp primlogix-dist.zip wordpress-prim-vm:/tmp/primlogix-dist.zip --zone=us-east1-b

# Deploy
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="cd /var/www/html/wp-content/themes/primlogix-theme && sudo rm -rf dist/* && sudo unzip -o /tmp/primlogix-dist.zip -d dist/ && sudo chown -R www-data:www-data dist/ && sudo chmod -R 755 dist/"

# Clear cache (if enabled)
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="wp cache flush --allow-root"
```

### Check Server Status

```powershell
# Check if dist folder exists and has files
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="ls -la /var/www/html/wp-content/themes/primlogix-theme/dist/"

# Check WordPress error logs
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="tail -n 50 /var/log/apache2/error.log"
```

### Update WordPress Theme Files (if needed)

If you need to update `functions.php` or `index.php`:

```powershell
# Upload functions-enhanced.php as functions.php
gcloud compute scp wordpress\functions-enhanced.php wordpress-prim-vm:/tmp/functions.php --zone=us-east1-b
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="sudo cp /tmp/functions.php /var/www/html/wp-content/themes/primlogix-theme/functions.php && sudo chown www-data:www-data /var/www/html/wp-content/themes/primlogix-theme/functions.php"

# Upload template-index.php as index.php
gcloud compute scp wordpress\template-index.php wordpress-prim-vm:/tmp/index.php --zone=us-east1-b
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="sudo cp /tmp/index.php /var/www/html/wp-content/themes/primlogix-theme/index.php && sudo chown www-data:www-data /var/www/html/wp-content/themes/primlogix-theme/index.php"
```

---

## Editing Workflow from Cursor

### Common Edit Scenarios

#### 1. Update Text Content
**File:** `src/data/content.js`
- Edit text, links, or data structures
- Build and deploy (see [Build & Deployment Workflow](#build--deployment-workflow))

#### 2. Update Component Styling
**Files:** 
- `src/components/[component].js` - Component HTML/structure
- `src/styles/main.css` - Global styles, animations, utilities

**Example:** Update footer logo or navbar styling
```javascript
// Edit src/components/footer.js or src/components/header.js
// Then build and deploy
```

#### 3. Add/Modify Animations
**File:** `src/styles/main.css`
- Add new `@keyframes` animations
- Update existing animation classes
- Build and deploy

#### 4. Update Images/Assets
**Locations:** WordPress Media Library + local `public/`
- Mockups live in `public/nouveau site 2026/` and are referenced via URL-encoded paths
- Team photos and logos use WordPress media URLs
- Downloadable files (installers, PDFs) live in `/var/www/html/wp-content/uploads/resources/`
- Update image URLs in `src/data/content.js` or component files if you upload new images
- Rebuild after changes to local assets

#### 5. Update Navigation Links
**File:** `src/data/content.js`
- Edit `navLinks` array
- Update `href` values (use clean URLs: `/solutions/`, not `/solutions.html`)
- Build and deploy

#### 6. Update Page Structure
**Files:**
- `src/pages/[page].js` - Page layout
- `src/components/[component].js` - Individual components
- Build and deploy

### Development Workflow

1. **Make changes** in Cursor
2. **Test locally** (optional):
   ```powershell
   npm run dev
   # Visit http://localhost:5173
   ```
3. **Build for production**:
   ```powershell
   .\node_modules\.bin\vite build
   Copy-Item dist\.vite\manifest.json dist\manifest.json -Force
   ```
4. **Preview build locally** (optional):
   ```powershell
   npm run preview
   # Visit http://localhost:4173
   ```
5. **Deploy to server** (see [Quick Reference Commands](#quick-reference-commands))

---

## Important Files & Their Purposes

### React App Files (Source)

| File | Purpose |
|------|---------|
| `src/data/content.js` | **All text content, links, images, navigation** - Main content file |
| `src/components/header.js` | Navbar with logo, navigation, theme toggle, mobile menu |
| `src/components/footer.js` | Footer with logo, links, compliance badges |
| `src/components/hero.js` | Hero section with CTAs |
| `src/components/features.js` | Feature tiles with modal popups |
| `src/styles/main.css` | Tailwind CSS + custom animations, utilities |
| `src/pages/home.js` | Home page layout |
| `src/entries/home.js` | Home page entry point |
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS configuration |

### WordPress Files

| File | Purpose |
|------|---------|
| `wordpress/functions-enhanced.php` | **Active PHP functions** - Handles asset loading, routing, 404 handling |
| `wordpress/template-index.php` | **Universal WordPress template** - Renders React app on all pages |
| `wordpress/.htaccess` | Apache rewrite rules for clean URLs (permits `/solutions/` instead of `/solutions.html`) |

### Build Output

| File | Purpose |
|------|---------|
| `dist/manifest.json` | **Critical** - Maps page entries to hashed asset files |
| `dist/index.html` | Home page entry |
| `dist/[page].html` | Other page entries |
| `dist/assets/*.js` | Hashed JavaScript bundles |
| `dist/assets/*.css` | Hashed CSS bundles |

---

## Troubleshooting

### Issue: Changes Not Appearing After Deployment

**Solutions:**
1. **Hard refresh browser**: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache** or use incognito mode
3. **Check if build succeeded**: Look for errors in build output
4. **Verify manifest.json exists**: 
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="ls -la /var/www/html/wp-content/themes/primlogix-theme/dist/manifest.json"
   ```
5. **Check WordPress error logs**:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="tail -n 50 /var/log/apache2/error.log"
   ```

### Issue: 404 Errors on Pages

**Solutions:**
1. **Check `.htaccess` exists** on server:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="ls -la /var/www/html/.htaccess"
   ```
2. **Verify permalink structure**:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="wp rewrite structure '/%postname%/' --allow-root"
   ```
3. **Check `functions-enhanced.php` routing** - Ensure page slugs match in `primlogix_get_page_key()`

### Issue: Images Not Loading

**Solutions:**
1. **Check image URLs** in `src/data/content.js` and components
2. **Verify WordPress-hosted images exist** in the media library
3. **Verify local mockups exist** in `public/nouveau site 2026/`
4. **Check file permissions**:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="ls -la /var/www/html/wp-content/uploads/nouveau\ site\ 2026/"
   ```

### Issue: Styling Broken / CSS Not Loading

**Solutions:**
1. **Check CSS files in manifest**:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="cat /var/www/html/wp-content/themes/primlogix-theme/dist/manifest.json | grep -i css"
   ```
2. **Verify `functions-enhanced.php` is loading CSS** - Check `primlogix_enqueue_assets()` function
3. **Rebuild and redeploy** - CSS file hashes may have changed

### Issue: JavaScript Errors in Console

**Solutions:**
1. **Check browser console** for specific error messages
2. **Verify JS files exist** on server:
   ```powershell
   gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="ls -la /var/www/html/wp-content/themes/primlogix-theme/dist/assets/*.js"
   ```
3. **Check `manifest.json` structure** - Ensure page entries point to correct JS files
4. **Verify `functions-enhanced.php` loads correct page entry** - Check `primlogix_get_page_key()` output

### Issue: Logo Not Displaying Correctly

**Solutions:**
1. **Check logo URLs** in `src/components/header.js` and `src/components/footer.js`
2. **Verify logo files exist** in WordPress media library
3. **Check image file permissions** on server
4. **Clear browser cache** and hard refresh

### Issue: Mobile Menu Not Working

**Solutions:**
1. **Check breakpoints** in `src/components/header.js` - Should use `xl:` for desktop nav
2. **Verify mobile menu JavaScript** in `src/utils/mobileMenu.js`
3. **Check Tailwind CSS classes** - Ensure `hidden`/`flex` classes are correct

### Issue: Build Fails

**Solutions:**
1. **Check for syntax errors** in edited files
2. **Verify Node.js version**: `node --version` (should be compatible with Vite)
3. **Clear node_modules and reinstall** (if needed):
   ```powershell
   Remove-Item -Recurse -Force node_modules
   npm install
   ```
4. **Check Vite config** in `vite.config.js`

---

## Key Reminders

1. **Always build before deploying** - Never edit files in `dist/` directly
2. **Copy `manifest.json`** - Must copy from `.vite/manifest.json` to `dist/manifest.json` after build
3. **Use clean URLs** - Links should be `/solutions/` not `/solutions.html`
4. **Image URLs** - Local mockups live in `public/nouveau site 2026/` (URL-encode spaces)
5. **Hard refresh after deployment** - `Ctrl+F5` to bypass browser cache
6. **Check error logs** if something breaks - WordPress logs are your friend
7. **Test locally first** (optional but recommended) - Use `npm run dev` before deploying

---

## Server Information

- **VM Name:** `wordpress-prim-vm`
- **Zone:** `us-east1-b`
- **IP Address:** `34.23.76.77`
- **WordPress Path:** `/var/www/html`
- **Theme Path:** `/var/www/html/wp-content/themes/primlogix-theme`
- **Uploads Path:** `/var/www/html/wp-content/uploads/nouveau site 2026/`

---

## Additional Resources

- **Vite Documentation:** https://vitejs.dev/
- **Tailwind CSS Documentation:** https://tailwindcss.com/
- **WordPress Theme Development:** https://developer.wordpress.org/themes/
- **Google Cloud Compute:** https://cloud.google.com/compute/docs

---

**Last Updated:** 2026-01-16
**Maintained by:** Development Team
**Contact:** For issues or questions, refer to this guide first, then check error logs.
