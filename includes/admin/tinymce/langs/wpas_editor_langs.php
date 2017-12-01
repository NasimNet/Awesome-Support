<?php

if ( ! defined( 'ABSPATH' ) )
    exit;
 
if ( ! class_exists( '_WP_Editors' ) )
    require( ABSPATH . WPINC . '/class-wp-editor.php' );
 
function wpas_editor_langs() {
	
    $strings = array(
		
		'button_title' => __('WPAS Template Tags', 'awesome-support'),
		'window_title' => __('Awesome Support Email Template Tags', 'awesome-support'),
		'plugin_long_name' => __('Awesome Support Email Template Tags', 'awesome-support'),
		'table_header_tag' => __('Tag', 'awesome-support'),
		'table_header_desc' => __('Description', 'awesome-support'),
		'instructions' => __('Select one of the following tags to insert into the email template, at the current cursor location. Note that these tags are only applicable on the EMAIL and NOTIFICATIONS settings tabs. Using them anywhere else will have no effect!', 'awesome-support')
    );
 
    $locale = _WP_Editors::$mce_locale;
    $translated = 'tinyMCE.addI18n("' . $locale . '.wpas_editor_langs", ' . json_encode( $strings ) . ");\n";
 
    return $translated;
}
 
$strings = wpas_editor_langs();