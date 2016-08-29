"use strict";

angular
	.module( "csus" )
	.controller( "DocsController", function() {
		var vm = this;
		
		vm.files = [
			{ name: "Constitution", url: "/files/constitution.pdf" }
		];
	} );
