"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'events', {
				url: "/events",
				templateUrl: "js/components/events/events.html"
			} );
	}] );