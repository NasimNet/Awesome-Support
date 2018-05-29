jQuery(document).ready(function ($) {

    /**
	 * Ajax based Opted in button processing
	 * in "Add/Remove Consent" from GDPR popup
	 */
	jQuery( ".wpas-consent-history" ).on( "click", ".wpas-gdpr-opt-in", function(e) {	
        e.preventDefault();
        var optin_handle = jQuery(this);
		var data = {
			'action': 'wpas_gdpr_user_opt_in',
			'security' : WPAS_GDPR.nonce,
			'data' 	: {
				'nonce'		: WPAS_GDPR.nonce,
				'gdpr-data'	: jQuery(this).data( 'gdpr' ),
				'gdpr-user'	: jQuery(this).data( 'user' ),
				'gdpr-optout'	: jQuery(this).data( 'optout-date' )
			}
		};
		
		jQuery.post(
			WPAS_GDPR.ajax_url,
			data,
			function( response ) {
				if( undefined !== response.message.success ){
					if( undefined !== response.message.date ){
						optin_handle.parent('td').siblings('td:nth-child(3)').html(response.message.date);
					}
					if( undefined !== response.message.button ){
						optin_handle.parent('td').html( response.message.button );
					}
					alert(response.message.success);
				} else if( undefined !== response.message.error ){
					alert(response.message.error);
				}
			}
		);		
	});

	/**
	 * Ajax based Opted out button processing
	 * in "Add/Remove Consent" from GDPR popup
	 */
	jQuery( ".wpas-consent-history" ).on( "click", ".wpas-gdpr-opt-out", function(e) {	
		e.preventDefault();
		var handle = jQuery(this);
		var data = {
			'action': 'wpas_gdpr_user_opt_out',
			'security' : WPAS_GDPR.nonce,
			'data' 	: {
				'nonce'		: WPAS_GDPR.nonce,
				'gdpr-data'	: jQuery(this).data( 'gdpr' ),
				'gdpr-user'	: jQuery(this).data( 'user' ),
				'gdpr-optin'	: jQuery(this).data( 'optin-date' )
			}
		};
		
		jQuery.post(
			WPAS_GDPR.ajax_url,
			data,
			function( response ) {
				if( undefined !== response.message.success ){
					if( undefined !== response.message.date ){
						handle.parent('td').siblings('td:nth-child(4)').html( response.message.date );
					}
					if( undefined !== response.message.button ){
						handle.parent('td').html( response.message.button );
					}

					alert( response.message.success );
				} else if( undefined !== response.message.error ){
					alert( response.message.error );
				}
			}
		);		
    });
    
});