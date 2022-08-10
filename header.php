<?php
/**
 * Third party plugins that hijack the theme will call wp_head() to get the header template.
 * We use this to start our output buffer and render into the view/page-plugin.twig template in footer.php
 *
 * If you're not using a plugin that requries this behavior (ones that do include Events Calendar Pro and
 * WooCommerce) you can delete this file and footer.php
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$GLOBALS['timberContext'] = Timber::context();
ob_start();

function twentytwenty_no_js_class() {

	?>
	<script>document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );</script>
	<?php

}

add_action( 'wp_head', 'twentytwenty_no_js_class' );
