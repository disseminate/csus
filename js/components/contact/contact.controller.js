"use strict";

angular
	.module( "csus" )
	.controller( "ContactController", ["$http", function( $http ) {
		var vm = this;
		
		vm.x = 43.0097400;
		vm.y = -81.270690;

		vm.message = { };

		vm.send = function() {
			vm.sending = true;

			$http.put( "/api/message", vm.message ).then( function( ret ) {
				vm.sending = false;

				swal( "Success", "Your message has been sent." );
				vm.message = { };
			}, function( err ) {
				vm.sending = false;

				if( err.status == 500 ) {
					swal( "Error", "There was an internal error sending your message. Try again later.", "error" );
				} else if( err.status == 400 ) {
					if( err.data.error == "name" ) {
						swal( "Error", "Please specify a name.", "error" );
					} else if( err.data.error == "email" ) {
						swal( "Error", "Please specify an email.", "error" );
					}
				}
			} );
		};
	}] );
