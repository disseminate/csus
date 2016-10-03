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
			image: "images/yusra.jpg",
			name: "Yusra Al-Sharafi",
			position: "VP Communications",
			degree: "3rd Year CS",
			email: "yalshara@uwo.ca",
			bio: "Hi guys! My name is Yusra Al-Sharafi and I am in my third year of Computer Science here at Western. This year, I'll be serving as VP Communications in CSUS. I look forward to keeping you guys in the loop of the happenings of the organisation and beyond."
		} );

		vm.execs.push( {
			name: "VP Treasurer",
			position: "VP Treasurer",
			degree: "Computer Science"
		} );
	} );