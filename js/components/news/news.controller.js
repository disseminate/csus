"use strict";

angular
	.module( "csus" )
	.controller( "NewsController", ["$sce", function( $sce ) {
		var vm = this;

		vm.news = []; // TODO: database

		vm.news.push( {
			title: "Applications Open",
			html: "<p>With the start of the new year, applications are now open for all CSUS VP exec positions!</p><p>Please email <a href='mailto:csus@uwo.ca'>csus@uwo.ca</a> with your name by September 28th and we'll set up an informal interview.",
			postdate: moment( "2016-09-08" )
		} );

		vm.news.push( {
			title: "New Website",
			html: "<p>Welcome to the new CSUS website. We've revamped it to be more functional and easy to use, as well as adding a news section and open-sourcing the site. We're looking forward to planning the next year - stay tuned!</p>",
			postdate: moment( "2016-08-29" )
		} );

		for( var i = 0; i < vm.news.length; i++ ) {
			vm.news[i].html = $sce.trustAsHtml( vm.news[i].html );
		}
	}] );