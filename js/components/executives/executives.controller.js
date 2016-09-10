"use strict";

angular
	.module( "csus" )
	.controller( "ExecutivesController", function() {
		var vm = this;

		vm.execs = [];

		vm.execs.push( {
			image: "images/kyle.png",
			name: "Kyle Windsor",
			position: "President",
			degree: "6th Year CS/Astrophysics",
			email: "kwindsor@uwo.ca",
			bio: "Hi! My name's Kyle Windsor, and I'm the President of CSUS. I was a student in the Department of Physics for my first through third years, before earning a minor and switching into Computer Science. I'm currently in my 6th year at Western, and my 4th year of CS. Feel free to contact me at any time through my university e-mail!"
		} );

		vm.execs.push( {
			name: "VP Academic",
			position: "VP Academic",
			degree: "Computer Science",
		} );

		vm.execs.push( {
			name: "VP Social",
			position: "VP Social",
			degree: "Computer Science"
		} );

		vm.execs.push( {
			name: "VP Communications",
			position: "VP Communications",
			degree: "Computer Science"
		} );

		vm.execs.push( {
			name: "VP Treasurer",
			position: "VP Treasurer",
			degree: "Computer Science"
		} );
	} );