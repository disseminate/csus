"use strict";

angular
	.module( "csus" )
	.directive( "navbar", function() {
		return {
			restrict: 'E',
			templateUrl: "js/shared/navbar/navbar.html"
		}
	} );