"use strict";

angular
	.module( "csus" )
	.config( ["$urlRouterProvider", function( $urlRouterProvider ) {
		$urlRouterProvider.otherwise( "/" );
	}] )
	.run( ["$rootScope", function( $rootScope ) {
		$rootScope.$on( "$stateChangeStart", function() {
			$( ".navbar-collapse" ).collapse( "hide" );
		} );
	}] );