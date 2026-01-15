<?php

function primlogix_enqueue_assets() {
    $dist_path = get_template_directory() . '/dist';
    $dist_uri  = get_template_directory_uri() . '/dist';

    $manifest_path = $dist_path . '/manifest.json';
    if (!file_exists($manifest_path)) {
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);
    if (!is_array($manifest) || !isset($manifest['index.html'])) {
        return;
    }

    $entry = $manifest['index.html'];

    if (!empty($entry['css'])) {
        foreach ($entry['css'] as $index => $css_file) {
            $css_path = $dist_path . '/' . $css_file;
            $css_uri  = $dist_uri . '/' . $css_file;
            $version  = file_exists($css_path) ? filemtime($css_path) : null;
            wp_enqueue_style("primlogix-style-$index", $css_uri, array(), $version);
        }
    }

    if (!empty($entry['file'])) {
        $js_path = $dist_path . '/' . $entry['file'];
        $js_uri  = $dist_uri . '/' . $entry['file'];
        $version = file_exists($js_path) ? filemtime($js_path) : null;
        wp_enqueue_script('primlogix-script', $js_uri, array(), $version, true);
    }
}
add_action('wp_enqueue_scripts', 'primlogix_enqueue_assets');

function primlogix_module_script($tag, $handle, $src) {
    if ($handle !== 'primlogix-script') {
        return $tag;
    }

    return '<script type="module" src="' . esc_url($src) . '"></script>';
}
add_filter('script_loader_tag', 'primlogix_module_script', 10, 3);
