"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'executives', {
				url: "/executives",
				templateUrl: "js/components/executives/executives.html",
				controller: "ExecutivesController",
				controllerAs: "vm"
			} );
	}] );