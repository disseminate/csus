"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'contact', {
				url: "/contact",
				templateUrl: "js/components/contact/contact.html",
				controller: "ContactController",
				controllerAs: "vm"
			} );
	}] );