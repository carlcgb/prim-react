# WordPress integration

## Quick Start

1. Build the project with:
   ```bash
   npm run build
   ```

2. Copy the generated `dist` folder into your WordPress theme:
   - `wp-content/themes/your-theme-name/dist`

3. Use one of the provided `functions.php` files:
   - `functions.php` - Basic version (loads index.html only)
   - `functions-enhanced.php` - Enhanced version (handles all pages dynamically)

4. Copy the template file:
   - `template-index.php` - Universal page template

## Full Documentation

For complete deployment instructions, see **[WORDPRESS_DEPLOYMENT.md](../WORDPRESS_DEPLOYMENT.md)** in the project root.

## How It Works

The manifest-based loader auto-enqueues hashed Vite assets, so you do not need to hardcode filenames in PHP. The enhanced version automatically detects which page you're on and loads the appropriate JavaScript entry point.
