"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'docs', {
				url: "/docs",
				templateUrl: "js/components/docs/docs.html",
				controller: "DocsController as vm"
			} );
	}] );
	