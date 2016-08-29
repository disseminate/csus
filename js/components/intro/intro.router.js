"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'intro', {
				url: "/",
				templateUrl: "js/components/intro/intro.html"
			} );
	}] );