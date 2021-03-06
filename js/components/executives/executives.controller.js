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
			name: "Henry He",
			position: "VP Academic",
			degree: "3rd Year CS",
			email: "che49@uwo.ca"
		} );

		vm.execs.push( {
			image: "images/marisa.jpg",
			name: "Marisa Mathura",
			position: "VP Social",
			degree: "1st Year CS",
			email: "mmathura@uwo.ca",
			bio: "Hey everyone! I'm Marisa and this year I'll be in charge of co-ordinating and planning CSUS social events. It is my first year here at Western and I am studying Computer Science along with Business. I'm very excited to be a part of CSUS and to meet lots of new people this year at our events!"
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
			image: "images/martin.jpg",
			name: "Martin Spassov",
			position: "VP Treasurer",
			degree: "1st Year CS",
			email: "mspassov@uwo.ca",
			bio: "Hello everyone! My name is Martin and I am in first year Computer Science. I will be the Treasurer in the upcoming year and I will be responsible for managing funds, and specifically designating part of the budget for the amazing events that we plan to host. I can't wait to get started, looking forward to meeting all of you!"
		} );
	} );