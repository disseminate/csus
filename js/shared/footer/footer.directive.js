"use strict";

angular
	.module( "csus" )
	.directive( "footer", function() {
		return {
			restrict: 'E',
			templateUrl: "js/shared/footer/footer.html"
		}
	} );