"use strict";

angular
	.module( "csus" )
	.config( ["$stateProvider", function( $stateProvider ) {
		$stateProvider
			.state( 'news', {
				url: "/news",
				templateUrl: "js/components/news/news.html",
				controller: "NewsController",
				controllerAs: "vm"
			} );
	}] );