# WordPress integration

1. Build the project with:
   - `npm run build`
2. Copy the generated `dist` folder into your theme:
   - `wp-content/themes/mon-theme/dist`
3. Merge `wordpress/functions.php` into your theme `functions.php`.

The manifest-based loader auto-enqueues hashed Vite assets, so you do not need
to hardcode filenames in PHP.
