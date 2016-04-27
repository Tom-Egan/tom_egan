/*************************************************************
*********************** Intake Valve *************************
*************************************************************/

/* create new timeline (intake valve) */
var intakeValveFull = new TimelineMax({repeat: 9999, repeatDelay: 5.3})			// delay in relation to piston resetting
intakeValveFull.to ("#intake-valve-full", 1.2, {x:0, y:0,z:0})						// reset point
			.to ("#intake-valve-full", 0.8, {x:-13.52, y:21.3,z:0}) 				// destination point
		    .to ("#intake-valve-full", 1.2, {x:0, y:0,z:0})						// reset point


/*************************************************************
*************** Intake Valve Spring Compression **************
*************************************************************/

/* create new timeline (intake spring 6) */
var intakeSpring6Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})		// delay in relation to piston resetting
intakeSpring6Full.to ("#intake-spring6-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring6-full", 0.8, {x:-1.2, y:2.3,z:0}) 				// destination point
			 .to ("#intake-spring6-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 5) */
var intakeSpring5Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})		// delay in relation to piston resetting
intakeSpring5Full.to ("#intake-spring5-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring5-full", 0.8, {x:-2.1, y:3.4,z:0}) 				// destination point
			 .to ("#intake-spring5-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 4) */
var intakeSpring4Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})		// delay in relation to piston resetting
intakeSpring4Full.to ("#intake-spring4-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring4-full", 0.8, {x:-3.1, y:4.7,z:0}) 				// destination point
			 .to ("#intake-spring4-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 3) */
var intakeSpring3Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})		// delay in relation to piston resetting
intakeSpring3Full.to ("#intake-spring3-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring3-full", 0.8, {x:-3.8, y:5.9,z:0}) 				// destination point
			 .to ("#intake-spring3-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 2) */
var intakeSpring2Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})
intakeSpring2Full.to ("#intake-spring2-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring2-full", 0.8, {x:-4.6, y:7.1,z:0}) 				// destination point
			 .to ("#intake-spring2-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 1) */
var intakeSpring1Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})
intakeSpring1Full.to ("#intake-spring1-full", 1.2, {x:0, y:0,z:0})					// reset point
			 .to ("#intake-spring1-full", 0.8, {x:-5.1, y:8.2,z:0}) 				// destination point
			 .to ("#intake-spring1-full", 1.2, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring top plate) */
var intakeSpringPlateFull = new TimelineMax({repeat: 9999, repeatDelay: 5.3})
intakeSpringPlateFull.to ("#intake-spring-top-full", 1.2, {x:0, y:0,z:0})			// reset point
				 .to ("#intake-spring-top-full", 0.8, {x:-5.3, y:8.2,z:0}) 		// destination point
			 	 .to ("#intake-spring-top-full", 1.2, {x:0, y:0,z:0})			// reset point


/*************************************************************
***************** Intake Valve Spring Top Cap ****************
*************************************************************/

/* create new timeline (intake spring top cap1) */
var intakeSpringCap1Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})
intakeSpringCap1Full.to ("#isc-top-full", 0, {x:6.3, y:-5.7,z:0})					// starting point fix
				.to ("#isc-top-full", 1.2, {x:6.3, y:-5.7,z:0})					// starting point fix
				.to ("#isc-top-full", 0.8, {x:1.6, y:1.5,z:0}) 					// destination point
			 	.to ("#isc-top-full", 1.2, {x:6.3, y:-5.7,z:0})					// reset point

/* create new timeline (intake spring top cap2) */
var intakeSpringCap2Full = new TimelineMax({repeat: 9999, repeatDelay: 5.3})
intakeSpringCap2Full.to ("#isc-bottom-full", 0, {x:3.3, y:-6.1,z:0})					// starting point fix
				.to ("#isc-bottom-full", 1.2, {x:3.3, y:-6.1,z:0})					// starting point fix
				.to ("#isc-bottom-full", 0.8, {x:-1.9, y:1.5,z:0}) 				// destination point
			 	.to ("#isc-bottom-full", 1.2, {x:3.3, y:-6.1,z:0})				// reset point


/*************************************************************
******************** Intake Air Particles ********************
*************************************************************/

/* create new timeline (intake air particle1) */
var airParticle1Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle1Full.to ("#air-particle1-full", 0, {x:9.5, y:-14, z:0, opacity: 0})		// start point fix
			.to ("#air-particle1-full", 1.2, {x:9.5, y:-14, z:0, opacity: 0})	// destination point	// start point fix
			.to ("#air-particle1-full", 2, {x:-5, y:70, z:0, opacity: 1})	
			.to ("#air-particle1-full", 0.2, {x:-5, y:70, z:0, opacity: 1})	
			.to ("#air-particle1-full", 1.2, {x:-5, y:11, z:0, opacity: 1})		
			.to ("#air-particle1-full", 0, {x:-5, y:11, z:0, opacity: 0})

/* create new timeline (intake air particle2) */
var airParticle2Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle2Full.to ("#air-particle2-full", 0, {x:9.5, y:-60, z:0, opacity: 0})		// start point fix
			.to ("#air-particle2-full", 1.2, {x:9.5, y:-60, z:0, opacity: 0})		// start point fix
			.to ("#air-particle2-full", 2, {x:-35, y:50, z:0, opacity: 1})		// destination point
			.to ("#air-particle2-full", 0.3, {x:-35, y:50, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle2-full", 1.1, {x:-35, y:3, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle2-full", 0, {x:-35, y:3, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle3) */
var airParticle3Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle3Full.to ("#air-particle3-full", 0, {x:9.5, y:-8, z:0, opacity: 0})		// start point fix
			.to ("#air-particle3-full", 1.2, {x:9.5, y:-8, z:0, opacity: 0})		// start point fix
			.to ("#air-particle3-full", 2, {x:-85, y:40, z:0, opacity: 1})		// destination point
			.to ("#air-particle3-full", 0.3, {x:-85, y:40, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle3-full", 1.1, {x:-85, y:2, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle3-full", 0, {x:-85, y:2, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle4) */
var airParticle4Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle4Full.to ("#air-particle4-full", 0, {x:9.5, y:-30, z:0, opacity: 0})		// start point fix
			.to ("#air-particle4-full", 1.2, {x:9.5, y:-30, z:0, opacity: 0})		// start point fix
			.to ("#air-particle4-full", 2, {x:-45, y:70, z:0, opacity: 1})		// destination point
			.to ("#air-particle4-full", 0.2, {x:-45, y:70, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle4-full", 1.2, {x:-45, y:3, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle4-full", 0, {x:-45, y:3, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle5) */
var airParticle5Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle5Full.to ("#air-particle5-full", 0, {x:25, y:-20, z:0, opacity: 0})		// start point fix
			.to ("#air-particle5-full", 1.2, {x:25, y:-20, z:0, opacity: 0})		// start point fix
			.to ("#air-particle5-full", 2, {x:-95, y:75, z:0, opacity: 1})		// destination point
			.to ("#air-particle5-full", 0.25, {x:-95, y:75, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle5-full", 1.15, {x:-95, y:16, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle5-full", 0, {x:-95, y:16, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle6) */
var airParticle6Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle6Full.to ("#air-particle6-full", 0, {x:-30, y:-10, z:0, opacity: 0})		// start point fix
			.to ("#air-particle6-full", 1.2, {x:-30, y:-10, z:0, opacity: 0})		// start point fix
			.to ("#air-particle6-full", 2, {x:-105, y:65, z:0, opacity: 1})		// destination point
			.to ("#air-particle6-full", 0.2, {x:-105, y:65, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle6-full", 1.2, {x:-105, y:25, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle6-full", 0, {x:-105, y:25, z:0, opacity: 0})	// opacity reset for loop

/* create new timeline (intake air particle7) */
var airParticle7Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle7Full.to ("#air-particle7-full", 0, {x:5, y:-27, z:0, opacity: 0})		// start point fix
			.to ("#air-particle7-full", 1.2, {x:5, y:-27, z:0, opacity: 0})		// start point fix
			.to ("#air-particle7-full", 2, {x:-31, y:71, z:0, opacity: 1})		// destination point
			.to ("#air-particle7-full", 0.2, {x:-31, y:71, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle7-full", 1.2, {x:-31, y:19, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle7-full", 0, {x:-31, y:19, z:0, opacity: 0})		// opacity reset for loop


/* create new timeline (intake air particle8) */
var airParticle8Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle8Full.to ("#air-particle8-full", 0, {x:15, y:-27, z:0, opacity: 0})		// start point fix
			.to ("#air-particle8-full", 1.2, {x:15, y:-27, z:0, opacity: 0})		// start point fix
			.to ("#air-particle8-full", 2, {x:-81, y:71, z:0, opacity: 1})		// destination point
			.to ("#air-particle8-full", 0.2, {x:-81, y:71, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle8-full", 1.2, {x:-81, y:21, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle8-full", 0, {x:-81, y:21, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle9) */
var airParticle9Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle9Full.to ("#air-particle9-full", 0, {x:-27, y:-17, z:0, opacity: 0})		// start point fix
			.to ("#air-particle9-full", 1.2, {x:-27, y:-17, z:0, opacity: 0})		// start point fix
			.to ("#air-particle9-full", 2, {x:-111, y:71, z:0, opacity: 1})		// destination point
			.to ("#air-particle9-full", 0.2, {x:-111, y:71, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle9-full", 1.2, {x:-111, y:25, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle9-full", 0, {x:-111, y:25, z:0, opacity: 0})	// opacity reset for loop

/* create new timeline (intake air particle10) */
var airParticle10Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle10Full.to ("#air-particle10-full", 0, {x:-27, y:-4, z:0, opacity: 0})		// start point fix
			.to ("#air-particle10-full", 1.2, {x:-27, y:-4, z:0, opacity: 0})		// start point fix
			.to ("#air-particle10-full", 2, {x:-51, y:99, z:0, opacity: 1})		// destination point
			.to ("#air-particle10-full", 0.2, {x:-51, y:99, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle10-full", 1.2, {x:-51, y:39, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle10-full", 0, {x:-51, y:39, z:0, opacity: 0})	// opacity reset for loop

/* create new timeline (intake air particle11) */
var airParticle11Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle11Full.to ("#air-particle11-full", 0, {x:-27, y:-24, z:0, opacity: 0})	// start point fix
			.to ("#air-particle11-full", 1.2, {x:-27, y:-24, z:0, opacity: 0})	// start point fix
			.to ("#air-particle11-full", 2, {x:-61, y:107, z:0, opacity: 1})		// destination point
			.to ("#air-particle11-full", 0.2, {x:-61, y:107, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle11-full", 1.2, {x:-61, y:31, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle11-full", 0, {x:-61, y:31, z:0, opacity: 0})	// opacity reset for loop

/* create new timeline (intake air particle12) */
var airParticle12Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle12Full.to ("#air-particle12-full", 0, {x:9, y:-29, z:0, opacity: 0})		// start point fix
			.to ("#air-particle12-full", 1.2, {x:9, y:-29, z:0, opacity: 0})		// start point fix
			.to ("#air-particle12-full", 2, {x:-81, y:77, z:0, opacity: 1})		// destination point
			.to ("#air-particle12-full", 0.2, {x:-81, y:77, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle12-full", 1.2, {x:-81, y:17, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle12-full", 0, {x:-81, y:17, z:0, opacity: 0})	// opacity reset for loop

/* create new timeline (intake air particle13) */
var airParticle13Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle13Full.to ("#air-particle13-full", 0, {x:30, y:-29, z:0, opacity: 0})		// start point fix
			.to ("#air-particle13-full", 1.2, {x:30, y:-29, z:0, opacity: 0})		// start point fix
			.to ("#air-particle13-full", 2, {x:-79, y:37, z:0, opacity: 1})		// destination point
			.to ("#air-particle13-full", 0.2, {x:-79, y:37, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle13-full", 1.2, {x:-79, y:9, z:0, opacity: 1})	// opacity reset for loop
			.to ("#air-particle13-full", 0, {x:-79, y:9, z:0, opacity: 0})	// opacity reset for loop


/* create new timeline (intake air particle14) */
var airParticle14Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle14Full.to ("#air-particle14-full", 0, {x:30, y:-49, z:0, opacity: 0})		// start point fix
			.to ("#air-particle14-full", 1.2, {x:30, y:-49, z:0, opacity: 0})		// start point fix
			.to ("#air-particle14-full", 2, {x:-5, y:37, z:0, opacity: 1})		// destination point
			.to ("#air-particle14-full", 0.2, {x:-5, y:37, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle14-full", 1.2, {x:-5, y:17, z:0, opacity: 1})		// opacity reset for loop
			.to ("#air-particle14-full", 0, {x:-5, y:17, z:0, opacity: 0})		// opacity reset for loop

/* create new timeline (intake air particle15) */
var airParticle15Full = new TimelineMax({repeat: 9999, repeatDelay: 3.9})
airParticle15Full.to ("#air-particle15-full", 0, {x:50, y:-29, z:0, opacity: 0})		// start point fix
			.to ("#air-particle15-full", 1.2, {x:50, y:-29, z:0, opacity: 0})		// start point fix
			 .to ("#air-particle15-full", 2, {x:-35, y:77, z:0, opacity: 1})		// destination point
			 .to ("#air-particle15-full", 0.2, {x:-35, y:77, z:0, opacity: 1})	// opacity reset for loop
			 .to ("#air-particle15-full", 1.2, {x:-35, y:27, z:0, opacity: 1})	// opacity reset for loop
			  .to ("#air-particle15-full", 0, {x:-35, y:27, z:0, opacity: 0})	// opacity reset for loop


/*************************************************************
************************ Piston Descent **********************
*************************************************************/

/* create new timeline (piston down) */
var pistonDownFull = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
pistonDownFull.to ("#piston-full", 0, {x:0, y:-102, z:0,ease:Linear.easeNone})							// start point fix
		  .to ("#piston-full", 1.2, {x:0, y:-102, z:0,ease:Linear.easeNone})							// start point fix
		  .to ("#piston-full", 1.6, {x:0, y:3, z:0,ease:Linear.easeNone})								// destination point
		  .to ("#piston-full", 1.6, {x:0, y:-102, z:0,ease:Linear.easeNone})							// reset
		  .to ("#piston-full", 1.6, {x:0, y:3, z:0,ease:Linear.easeNone})								// destination point
		  .to ("#piston-full", 1.6, {x:0, y:-102, z:0,ease:Linear.easeNone})							// reset


/*************************************************************
******************* Connecting Rod Rotation ******************
*************************************************************/

/* create new timeline (piston down) */
var cRodRightFull = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
cRodRightFull.to ("#connecting-rod-full", 0, {x:0, y:-102, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})							// start point fix
		 .to ("#connecting-rod-full", 1.2, {x:0, y:-102, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})							// start point fix
		 .to ("#connecting-rod-full", 0.8, {x:6, y:-30, z:50, rotation: -13, transformOrigin:"0px 50px",ease:Linear.easeNone})
		 .to ("#connecting-rod-full", 0.8, {x:0, y:3, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})							// destination point
		  .to ("#connecting-rod-full", 0.8, {x:-3, y:-70, z:50, rotation: 13, transformOrigin:"0px 50px",ease:Linear.easeNone})
		 .to ("#connecting-rod-full", 0.8, {x:0, y:-102, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})
		 		 .to ("#connecting-rod-full", 0.8, {x:6, y:-30, z:50, rotation: -13, transformOrigin:"0px 50px",ease:Linear.easeNone})
		 .to ("#connecting-rod-full", 0.8, {x:0, y:3, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})	
		 .to ("#connecting-rod-full", 0.8, {x:-3, y:-70, z:50, rotation: 13, transformOrigin:"0px 50px",ease:Linear.easeNone})
		 .to ("#connecting-rod-full", 0.8, {x:0, y:-102, z:0, rotation: 0, transformOrigin:"0px 50px",ease:Linear.easeNone})

		 /* create new timeline (piston down) */
var spray1Full = new TimelineMax({repeat: 9999, repeatDelay: 7.3})
spray1Full.to ("#spray1-full", 0, {opacity:0})							// start point fix
spray1Full.to ("#spray1-full", 0.4, {opacity:1})							// start point fix
spray1Full.to ("#spray1-full", 0.5, {opacity:0})							// start point fix
spray1Full.to ("#spray1-full", 0.3, {opacity:0})							// start point fix


var spray2Full = new TimelineMax({repeat: 9999, repeatDelay: 7.3})
spray2Full.to ("#spray2-full", 0, {opacity:0})							// start point fix
spray2Full.to ("#spray2-full", 0.1, {opacity:0})							// start point fix
spray2Full.to ("#spray2-full", 0.4, {opacity:1})							// start point fix
spray2Full.to ("#spray2-full", 0.5, {opacity:0})							// start point fix
spray2Full.to ("#spray2-full", 0.2, {opacity:0})							// start point fix


var spray3Full = new TimelineMax({repeat: 9999, repeatDelay: 7.3})
spray3Full.to ("#spray3-full", 0, {opacity:0})							// start point fix
spray3Full.to ("#spray3-full", 0.2, {opacity:0})							// start point fix
spray3Full.to ("#spray3-full", 0.4, {opacity:1})							// start point fix
spray3Full.to ("#spray3-full", 0.5, {opacity:0})							// start point fix
spray3Full.to ("#spray3-full", 0.1, {opacity:0})							// start point fix


var spray4Full = new TimelineMax({repeat: 9999, repeatDelay: 7.3})
spray4Full.to ("#spray4-full", 0, {opacity:0})							// start point fix
spray4Full.to ("#spray4-full", 0.4, {opacity:0})							// start point fix
spray4Full.to ("#spray4-full", 0.5, {opacity:1})							// start point fix
spray4Full.to ("#spray4-full", 0.3, {opacity:0})							// start point fix


var compressedCloudFull = new TimelineMax({repeat: 9999, repeatDelay: 2.2})
compressedCloudFull.to ("#compressed-cloud-full", 0, {opacity: 0})	// opacity reset for loop
				.to ("#compressed-cloud-full", 4.1, {opacity:0})	// opacity reset for loop
			 .to ("#compressed-cloud-full", 0.4, {opacity: 1})	// opacity reset for loop
			 .to ("#compressed-cloud-full", 1.6, {opacity: 1, fill: "#A16FD1"})	// opacity reset for loop
			 .to ("#compressed-cloud-full", 0.2, {opacity: 0})	// opacity reset for loop


var compressedCloudFullBottom = new TimelineMax({repeat: 9999, repeatDelay: 2.2})
compressedCloudFullBottom.to ("#cloud-full", 0, {opacity: 0, y: 4.45})	// opacity reset for loop
				.to ("cloud-full", 4.1, {opacity:0})	// opacity reset for loop
			 .to ("#cloud-full", 0.4, {opacity: 1})	// opacity reset for loop
			 .to ("#cloud-full", 1.6, {opacity: 1, scaleY: 3, fill: "#A16FD1"})	// opacity reset for loop
			 .to ("#cloud-full", 0.2, {opacity: 0})	// opacity reset for loop

// Spark
var sparkBoltFull = new TimelineMax({repeat: 9999, repeatDelay: 3.75})
sparkBoltFull.to ("#spark-icon-full", 0, {opacity: 0, scale: 0, x: 5})	// opacity reset for loop
		.to ("#spark-icon-full", 4.15, {opacity: 0, scale: 0, x: 5})	// opacity reset for loop
		 .to ("#spark-icon-full", 0.25, {opacity: 1, scale: 1, x: 0})	// opacity reset for loop
		 .to ("#spark-icon-full", 0.35, {opacity: 0})	// opacity reset for loop



// Flame
var flameFull = new TimelineMax({repeat: 9999, repeatDelay:2.85})
flameFull.to ("#flame-full", 0, {opacity: 0})	// opacity reset for loop
		 .to ("#flame-full", 4.45, {opacity: 0, scale: 0, x: 10})	// opacity reset for loop
		 .to ("#flame-full", 0.85, {opacity: 1, scale: 2.5, x: -18})	// opacity reset for loop
		 .to ("#flame-full", 0.35, {opacity: 0})	// opacity reset for loop


/*************************************************************
******************** Exhaust Air Particles ********************
*************************************************************/

/* create new timeline (intake air particle1) */
var airParticle1bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle1bFull.to ("#air-particle1b-full", 0, {x:44, y:24, z:0, opacity: 0})		// destination point
			 .to ("#air-particle1b-full", 5.5, {x:44, y:24, z:0, opacity: 0})		// destination point
			 .to ("#air-particle1b-full", 1, {x:44, y:24, z:0, opacity: 1})		// destination point
			 .to ("#air-particle1b-full",2, {x:-25, y:-90, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle2) */
var airParticle2bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle2bFull.to ("#air-particle2b-full", 0, {x:25, y:37, z:0, opacity: 0})		// destination point
			 .to ("#air-particle2b-full",5.5, {x:25, y:37, z:0, opacity: 0})		// destination point
			 .to ("#air-particle2b-full",1, {x:25, y:37, z:0, opacity: 1})		// destination point
			 .to ("#air-particle2b-full", 2, {x:-25, y:-83, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle3) */
var airParticle3bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle3bFull.to ("#air-particle3b-full", 0, {x:33, y:4, z:0, opacity: 0})		// destination point
			 .to ("#air-particle3b-full", 5.5, {x:33, y:4, z:0, opacity: 0})		// destination point
			 .to ("#air-particle3b-full", 1, {x:33, y:4, z:0, opacity: 1})		// destination point
			 .to ("#air-particle3b-full", 2, {x:-25, y:-72, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle4) */
var airParticle4bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle4bFull.to ("#air-particle4b-full", 0, {x:35, y:11, z:0, opacity: 0})		// destination point
			  .to ("#air-particle4b-full", 5.5, {x:35, y:11, z:0, opacity: 0})		// destination point
			  .to ("#air-particle4b-full", 1, {x:35, y:11, z:0, opacity: 1})		// destination point
			 .to ("#air-particle4b-full", 2, {x:-25, y:-78, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle5) */
var airParticle5bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle5bFull.to ("#air-particle5b-full", 0, {x:41, y:16, z:0, opacity: 0})		// destination point
			 .to ("#air-particle5b-full", 5.5, {x:41, y:16, z:0, opacity: 0})		// destination point
			 .to ("#air-particle5b-full", 1, {x:41, y:16, z:0, opacity: 1})		// destination point
			 .to ("#air-particle5b-full", 2, {x:-25, y:-77, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle6) */
var airParticle6bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle6bFull.to ("#air-particle6b-full", 0, {x:39, y:21, z:0, opacity: 0})		// destination point
			  .to ("#air-particle6b-full", 5.5, {x:39, y:21, z:0, opacity: 0})		// destination point
			  .to ("#air-particle6b-full", 1, {x:39, y:21, z:0, opacity: 1})		// destination point
			 .to ("#air-particle6b-full", 2, {x:-45, y:-70, z:0, opacity: 1})		// destination point


/* create new timeline (intake air particle8) */
var airParticle8bFull = new TimelineMax({repeat: 9999, repeatDelay:0})
airParticle8bFull.to ("#air-particle8b-full", 0, {x:11, y:15, z:0, opacity: 0})		// destination point
			 .to ("#air-particle8b-full",5.5, {x:11, y:15, z:0, opacity: 0})		// destination point
			 .to ("#air-particle8b-full", 1, {x:11, y:15, z:0, opacity: 1})		// destination point
			 .to ("#air-particle8b-full", 2, {x:-45, y:-80, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle9) */
var airParticle9bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle9bFull.to ("#air-particle9b-full", 0, {x:57, y:22, z:0, opacity: 0})		// destination point
			 .to ("#air-particle9b-full", 5.5, {x:57, y:22, z:0, opacity: 0})		// destination point
			 .to ("#air-particle9b-full", 1, {x:57, y:22, z:0, opacity: 1})		// destination point
			 .to ("#air-particle9b-full", 2, {x:-45, y:-70, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle10) */
var airParticle10bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle10bFull.to ("#air-particle10b-full", 0, {x:8, y:34, z:0, opacity: 0})		// destination point
			  .to ("#air-particle10b-full", 5.5, {x:8, y:34, z:0, opacity: 0})		// destination point
			  .to ("#air-particle10b-full", 1, {x:8, y:34, z:0, opacity: 1})		// destination point
			 .to ("#air-particle10b-full", 2, {x:-45, y:-70, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle11) */
var airParticle11bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle11bFull.to ("#air-particle11b-full", 0, {x:27, y:27, z:0, opacity: 0})		// destination point
			  .to ("#air-particle11b-full", 5.5, {x:27, y:27, z:0, opacity: 0})		// destination point
			  .to ("#air-particle11b-full", 1, {x:27, y:27, z:0, opacity: 1})		// destination point
			 .to ("#air-particle11b-full", 2, {x:-45, y:-70, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle12) */
var airParticle12bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle12bFull.to ("#air-particle12b-full", 0, {x:22, y:22, z:0, opacity: 0})		// destination point
			  .to ("#air-particle12b-full", 5.5, {x:22, y:22, z:0, opacity: 0})		// destination point
			  .to ("#air-particle12b-full", 1, {x:22, y:22, z:0, opacity: 1})		// destination point
			 .to ("#air-particle12b-full", 2, {x:-25, y:-70, z:0, opacity: 1})		// destination point

/* create new timeline (intake air particle13) */
var airParticle13bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle13bFull.to ("#air-particle13b-full", 0, {x:28, y:35, z:0, opacity: 0})		// destination point
			  .to ("#air-particle13b-full", 5.5, {x:28, y:35, z:0, opacity: 0})		// destination point
			  .to ("#air-particle13b-full", 1, {x:28, y:35, z:0, opacity: 1})		// destination point
			 .to ("#air-particle13b-full", 2, {x:-25, y:-75, z:0, opacity: 1})		// destination point


/* create new timeline (intake air particle15) */
var airParticle15bFull = new TimelineMax({repeat: 9999, repeatDelay: 0})
airParticle15bFull.to ("#air-particle15b-full", 0, {x:23, y:30, z:0, opacity: 0})		// destination point
			.to ("#air-particle15b-full", 5.5, {x:23, y:30, z:0, opacity: 0})		// destination point
			.to ("#air-particle15b-full", 1, {x:23, y:30, z:0, opacity: 1})		// destination point
			 .to ("#air-particle15b-full", 2, {x:-25, y:-75, z:0, opacity: 1})		// destination point


			 /*************************************************************
*********************** Exhaust Valve *************************
*************************************************************/

/* create new timeline (intake valve) */
var exhaustValveFull = new TimelineMax({repeat: 9999, repeatDelay:0.9})			// delay in relation to piston resetting
exhaustValveFull.to ("#exhaust-valve2-full", 6.3, {x:0, y:0,z:0})						// reset point
			.to ("#exhaust-valve2-full", 0.8, {x:11.52, y:19.3,z:0}) 				// destination point
		    .to ("#exhaust-valve2-full", 0.5, {x:0, y:0,z:0})						// reset point

/*************************************************************
*************** Exhaust Valve Spring Compression **************
*************************************************************/

/* create new timeline (intake spring 3) */
var exhaustSpringHalfFull = new TimelineMax({repeat: 9999, repeatDelay: 0.9})		// delay in relation to piston resetting
exhaustSpringHalfFull.to ("#exhaust-spring-half-full",6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring-half-full", 0.8, {x:4.8, y:7.2,z:0}) 				// destination point
			 .to ("#exhaust-spring-half-full", 0.5, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 1) */
var exhaustSpring1Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
exhaustSpring1Full.to ("#exhaust-spring1a-full", 6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring1a-full", 0.8, {x:4.1, y:6.4,z:0}) 				// destination point
			 .to ("#exhaust-spring1a-full", 0.5, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 2) */
var exhaustSpring2Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
exhaustSpring2Full.to ("#exhaust-spring2a-full",6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring2a-full", 0.8, {x:3.4, y:5.4,z:0}) 				// destination point
			 .to ("#exhaust-spring2a-full", 0.5, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 3) */
var exhaustSpring3Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})		// delay in relation to piston resetting
exhaustSpring3Full.to ("#exhaust-spring3-full", 6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring3-full", 0.8, {x:2.8, y:4.4,z:0}) 				// destination point
			 .to ("#exhaust-spring3-full", 0.5, {x:0, y:0,z:0})					// reset point

/* create new timeline (intake spring 5) */
var exhaustSpring5Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})		// delay in relation to piston resetting
exhaustSpring5Full.to ("#exhaust-spring5-full", 6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring5-full", 0.8, {x:2.1, y:3.4,z:0}) 				// destination point
			 .to ("#exhaust-spring5-full", 0.5, {x:0, y:0,z:0})					// reset point


/* create new timeline (intake spring 6) */
var exhaustSpring6Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})		// delay in relation to piston resetting
exhaustSpring6Full.to ("#exhaust-spring6-full", 6.3, {x:0, y:0,z:0})					// reset point
			 .to ("#exhaust-spring6-full",0.8, {x:1.2, y:2,z:0}) 				// destination point
			 .to ("#exhaust-spring6-full",0.5, {x:0, y:0,z:0})					// reset point


/* create new timeline (intake spring top plate) */
var exhaustSpringPlateFull = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
exhaustSpringPlateFull.to ("#exhaust-spring-top2-full", 6.3, {x:0, y:0,z:0})			// reset point
				 .to ("#exhaust-spring-top2-full", 0.8, {x:4.6, y:7.2,z:0}) 		// destination point
			 	 .to ("#exhaust-spring-top2-full", 0.5, {x:0, y:0,z:0})			// reset point

/*************************************************************
***************** Exhaust Valve Spring Top Cap ****************
*************************************************************/

/* create new timeline (intake spring top cap1) */
var exhaustSpringCap1Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
exhaustSpringCap1Full.to ("#esc-top2-full", 0, {x:27.2, y:7.2,z:0})					// starting point fix
				.to ("#esc-top2-full", 6.3, {x:27.2, y:7.2,z:0})					// starting point fix
				.to ("#esc-top2-full", 0.8, {x: 32, y:14.6,z:0}) 					// destination point
			 	.to ("#esc-top2-full", 0.5, {x:27.2, y:7.2,z:0})					// reset point

/* create new timeline (intake spring top cap2) */
var exhaustSpringCap2Full = new TimelineMax({repeat: 9999, repeatDelay: 0.9})
exhaustSpringCap2Full.to ("#esc-bottom2-full", 0, {x:24.2, y:-2.7,z:0})					// starting point fix
				.to ("#esc-bottom2-full", 6.3, {x:24.2, y:-2.7,z:0})					// starting point fix
				.to ("#esc-bottom2-full", 0.8, {x:29, y:4.7,z:0}) 				// destination point
			 	.to ("#esc-bottom2-full", 0.5, {x:24.2, y:-2.7,z:0})				// reset point