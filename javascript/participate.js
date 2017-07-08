
			$(document).ready(function(){	

				var space = 1;
				var dynamicity;
				var tech;
				var presense;
				var sensing;
				var corr;
				var value;


				/*$("space_input").on("change", function(){
						
						space = $(this).val();
						console.log(space);
						// return space; 
				}); */
				
				$("#tech_input").on("change", function(){

					tech = $(this).val();
					

						console.log(tech);
						//return tech;
				});

				$("#pre_input").on("change", function(){
					
					presense = $(this).val();

					console.log(presense);
					
						
					//	return presense;
					
				});
					$("#dyn_input").on("change", function(){
					
					dynamicity = $(this).val();
					
					console.log(dynamicity);

					//return dynamicity;
				});
					$("#sense_input").on("change", function(){
					
					sensing = $(this).val();

					console.log(sensing);


					
				});
				    $("#corr_input").on("change", function(){
					
					corr = $(this).val();

					console.log(corr);
					
				});
					$("#key_input").on("click", function(){
						
					value = $(this).val();
								
				});

		function starVis(){


//						console.log("Button Pressed");

						var data_1 = [
								  		[
											{axis:"correspondence",value:corr},
										  	{axis:"sensing",value:sensing},
											{axis:"architectural space",value:space},
											{axis:"human presence",value:presense},
											{axis:"dynamicity",value:dynamicity},
											{axis:"technology",value: tech},
									
										]
									];

					var mycfg = {
								  w: 250,
								  h: 250,
								  maxValue: 1,
								  levels: 2,
								  ExtraWidthX: 150
								}
					RadarChart.draw("#temp-vis", dat, mycfg);  

	 				//$("#details").html(obj.title);
	 			//	$("#tag").html(obj.tags);
	 			//	$("#when").html(obj.when);
	 			//	$("#where").html(obj.where);
	 			//	$("#why").html(obj.why);
	 			//	$("#duration").html(obj.duration);
	 			//	$("#how").html(obj.how);
	 				$("#second-modal").modal();

	 				} 
	 				
/*
	 				$("#btn_viz").on("click",function(){


	 					console.log("Button Clicked") ;
/*
	 				var dat = [
								  [
									{axis:"correspondence",value:corr},
								  	{axis:"sensing",value:sensing},
									{axis:"architectural space",value:space},
									{axis:"human presence",value:presense},
									{axis:"dynamicity",value:dynamicity},
									{axis:"technology",value: tech},
							
								  ]
							];

					var mycfg = {
								  w: 250,
								  h: 250,
								  maxValue: 1,
								  levels: 2,
								  ExtraWidthX: 150
								}
					RadarChart.draw("#temp_vis", dat, mycfg);  

	 				$("#second-modal").modal();

	 			});  */










});
