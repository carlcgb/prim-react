<?php
/**
 * Template Name: PRIMLogix Page Template
 * 
 * This is a universal template that works for all pages.
 * WordPress will automatically load the correct JavaScript entry point
 * based on the page slug via the functions.php logic.
 */

// Remove WordPress default header/footer to prevent "WordPress on Google Compute Engine" from showing
remove_action('wp_head', '_admin_bar_bump_cb');
add_filter('show_admin_bar', '__return_false');
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <link rel="icon" type="image/png" sizes="64x64" href="https://34.23.76.77/wp-content/uploads/nouveau site 2026/logo/prim-white-64.png?v=2">
    <link rel="shortcut icon" type="image/png" href="https://34.23.76.77/wp-content/uploads/nouveau site 2026/logo/prim-white-64.png?v=2">
    <link rel="apple-touch-icon" type="image/png" href="https://34.23.76.77/wp-content/uploads/nouveau site 2026/favicon_io/apple-touch-icon.png?v=2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PRIMLogix is an all-in-one ATS/CRM platform for staffing agencies, automating recruitment, matching, scheduling, billing, and payroll.">
    <title>PRIMLogix</title>
    <?php 
    // Only load essential WordPress head content (scripts/styles from functions.php)
    wp_head(); 
    ?>
    <style>
        /* Hide WordPress admin bar and default content */
        #wpadminbar { display: none !important; }
        .site-title, .site-description { display: none !important; }
        body.admin-bar { margin-top: 0 !important; }
    </style>
</head>
<body>
    <script>
        // Initialize theme before render to prevent FOUC (Flash of Unstyled Content)
        (function() {
            const STORAGE_KEY = 'primlogix_theme';
            const THEMES = { SYSTEM: 'system', LIGHT: 'light', DARK: 'dark' };
            const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
            const getTheme = () => {
                const stored = localStorage.getItem(STORAGE_KEY);
                return stored && Object.values(THEMES).includes(stored) ? stored : THEMES.SYSTEM;
            };
            const getEffectiveTheme = () => {
                const stored = getTheme();
                return stored === THEMES.SYSTEM ? getSystemTheme() : stored;
            };
            const effectiveTheme = getEffectiveTheme();
            if (effectiveTheme === THEMES.DARK) {
                document.documentElement.classList.add('dark');
            }
        })();
    </script>
    <div id="app"></div>
    <?php wp_footer(); ?>
</body>
</html>
