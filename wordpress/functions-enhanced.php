<?php
/**
 * PRIMLogix Theme Functions - Enhanced Version
 * 
 * This version handles all pages dynamically by detecting the current page
 * and loading the appropriate assets from the Vite manifest.
 */

function primlogix_enqueue_assets() {
    $dist_path = get_template_directory() . '/dist';
    $dist_uri  = get_template_directory_uri() . '/dist';

    $manifest_path = $dist_path . '/manifest.json';
    if (!file_exists($manifest_path)) {
        error_log('PRIMLogix: manifest.json not found at ' . $manifest_path);
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);
    if (!is_array($manifest)) {
        error_log('PRIMLogix: manifest.json is invalid');
        return;
    }

    // Determine which page we're on
    $page_key = primlogix_get_page_key();
    
    if (!isset($manifest[$page_key])) {
        // Fallback to index.html
        error_log('PRIMLogix: Page key "' . $page_key . '" not found in manifest, using index.html');
        $page_key = 'index.html';
    }

    $entry = $manifest[$page_key];

    // Enqueue CSS files (from entry or from imports)
    $css_files = array();
    
    // Check if entry has direct CSS
    if (!empty($entry['css'])) {
        $css_files = array_merge($css_files, $entry['css']);
    }
    
    // Check imports for CSS files (Vite imports CSS in JS)
    if (!empty($entry['imports'])) {
        foreach ($entry['imports'] as $import_key) {
            if (isset($manifest[$import_key]) && !empty($manifest[$import_key]['css'])) {
                $css_files = array_merge($css_files, $manifest[$import_key]['css']);
            }
            // Also check if the import itself is a CSS file
            if (isset($manifest[$import_key]) && isset($manifest[$import_key]['file']) && 
                strpos($manifest[$import_key]['file'], '.css') !== false) {
                $css_files[] = $manifest[$import_key]['file'];
            }
        }
    }
    
    // Load all unique CSS files
    $css_files = array_unique($css_files);
    foreach ($css_files as $index => $css_file) {
        $css_path = $dist_path . '/' . $css_file;
        $css_uri  = $dist_uri . '/' . $css_file;
        if (file_exists($css_path)) {
            $version = filemtime($css_path);
            wp_enqueue_style("primlogix-style-$index", $css_uri, array(), $version);
        }
    }
    
    // Fallback: Load animations CSS directly if it exists (Vite imports it in JS)
    $animations_css = $dist_path . '/assets/animations-BTa_Skis.css';
    if (file_exists($animations_css) && empty($css_files)) {
        $css_uri = $dist_uri . '/assets/animations-BTa_Skis.css';
        $version = filemtime($animations_css);
        wp_enqueue_style('primlogix-animations-css', $css_uri, array(), $version);
    }

    // Enqueue JS file
    if (!empty($entry['file'])) {
        $js_path = $dist_path . '/' . $entry['file'];
        $js_uri  = $dist_uri . '/' . $entry['file'];
        $version = file_exists($js_path) ? filemtime($js_path) : null;
        wp_enqueue_script('primlogix-script', $js_uri, array(), $version, true);
    }
}
add_action('wp_enqueue_scripts', 'primlogix_enqueue_assets');

/**
 * Determine which HTML file to load based on current WordPress page
 */
function primlogix_get_page_key() {
    // Map WordPress page slugs to your HTML files (including French variants)
    $page_slugs = array(
        'solutions' => 'solutions.html',
        'industries' => 'industries.html',
        'resources' => 'resources.html',
        'ressources' => 'resources.html', // French variant
        'pricing' => 'pricing.html',
        'company' => 'company.html',
        'home' => 'index.html',
    );

    // Get current URL path
    $request_uri = trim($_SERVER['REQUEST_URI'], '/');
    $path_parts = explode('/', $request_uri);
    $first_segment = !empty($path_parts[0]) ? $path_parts[0] : '';

    // Check if URL matches a known page slug (primary method)
    if (!empty($first_segment) && isset($page_slugs[$first_segment])) {
        return $page_slugs[$first_segment];
    }

    // Check if we're on a specific page (WordPress detection)
    if (is_page()) {
        $page_slug = get_post_field('post_name', get_the_ID());
        if (isset($page_slugs[$page_slug])) {
            return $page_slugs[$page_slug];
        }
    }

    // Check if we're on the home page (front page)
    if (is_front_page() || is_home() || empty($first_segment)) {
        return 'index.html';
    }

    // Default to home page
    return 'index.html';
}

/**
 * Make the script load as a module (required for ES6 modules)
 */
function primlogix_module_script($tag, $handle, $src) {
    if ($handle !== 'primlogix-script') {
        return $tag;
    }

    return '<script type="module" src="' . esc_url($src) . '"></script>';
}
add_filter('script_loader_tag', 'primlogix_module_script', 10, 3);

/**
 * Remove WordPress default site title/description from appearing on page
 */
function primlogix_remove_default_title() {
    // Hide admin bar
    add_filter('show_admin_bar', '__return_false');
    
    // Remove site title from document title if it contains "WordPress on Google"
    add_filter('document_title_parts', function($title) {
        if (isset($title['site']) && strpos($title['site'], 'WordPress on Google') !== false) {
            $title['site'] = 'PRIMLogix';
        }
        return $title;
    });
    
    // Add CSS to hide WordPress default content
    add_action('wp_head', function() {
        echo '<style>
            .site-title, .site-description, 
            h1.site-title, h2.site-title,
            .wp-site-blocks > h1,
            body > h1:first-of-type,
            .entry-title:contains("WordPress on Google"),
            *:contains("WordPress on Google Compute Engine") {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                overflow: hidden !important;
            }
            #wpadminbar { display: none !important; }
            body.admin-bar { margin-top: 0 !important; }
        </style>';
    }, 999);
}
add_action('init', 'primlogix_remove_default_title');

/**
 * Catch 404 errors and route to React app
 * Also handle cases where pages exist but WordPress can't find them
 */
function primlogix_catch_404() {
    // Get the requested URL
    $request_uri = trim($_SERVER['REQUEST_URI'], '/');
    $path_parts = explode('/', $request_uri);
    $first_segment = !empty($path_parts[0]) ? $path_parts[0] : '';
    
    // Map of valid routes (including both English and French slugs)
    $valid_routes = array('solutions', 'industries', 'resources', 'ressources', 'pricing', 'company', 'home');
    
    // If it's a 404 OR if it's a valid route, load the React app
    if (is_404() || in_array($first_segment, $valid_routes) || empty($first_segment)) {
        // Check if it's actually a 404 for a valid route
        if (is_404() && in_array($first_segment, $valid_routes)) {
            status_header(200);
            include(get_template_directory() . '/index.php');
            exit;
        }
        // Also catch if we're on a valid route but WordPress hasn't loaded properly
        if (in_array($first_segment, $valid_routes) || empty($first_segment)) {
            // Make sure we're using the index template
            if (!is_page() && !is_front_page() && !is_home()) {
                status_header(200);
                include(get_template_directory() . '/index.php');
                exit;
            }
        }
    }
}
add_action('template_redirect', 'primlogix_catch_404', 1);
