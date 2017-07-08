// Visualization of the framework. 
// Our framework defines core elements of Media Architecture. 
// And this visualization shows where does a so called Media Architecture project stands. Near the core or far away from it.
// Special thanks to Taher Dhilawala and Michael Market for thier feedback on the code and helping  debugging. 
// In the following code there  following libraries are used. 
/*

d3.js - https://d3js.org/-  https://github.com/d3/d3
Jquerymodal.com - https://github.com/kylefox/jquery-modal 

*/



var plotData = null;

$(document).ready(function(){	
	loadData();	

	$("#spaceType").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("spacetype", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});
		$("#tech").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("technology", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});

	$("#presence").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("presense", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});
		$("#sensing").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("sensing", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});
		$("#corr").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("correspondance", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});
			$("#dyn").on("change", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("dynamicity", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});
			$("#mf").on("click", function(){
		var value = $(this).val();
		if(value == ""){ 
			plotGraph(plotData);
			return;
		}

		var data = filterData("tags", value);
		if(data.length > 0){
			plotGraph(data);
		}		
	});


});

function loadData(){
	$.ajax({
		url: "data/final_db_xl.json",
		success: function(response){			
			plotData = response;	
			plotGraph(plotData);		
		},
		error: function(response){
			console.log(response);
		}
	})
}

function filterData(key, value){
	var data = $.grep(plotData, function(obj){				
		return (obj[key].toLowerCase() == value.toLowerCase());		
	});	
	return data;
}


var width = 880;
var height = 500;

function plotGraph(data){	
	var zone = [1,1.5,2,2.5,3,3.5,4,4.5];
	var rdii = 50;
	var p1 = width/2;
	var p2 = height/2;

	// Defining Colors for each tag

	d3.select("svg").remove();

	var canvas = d3.select("#vizdiv").append("svg")
				.attr("width", width)
				.attr("height", height)
				//.attr("transform","translate(200,200)")

//	var colorMap = d3.scaleOrdinal().domain(["Media Facade","Light Architecture","Installation","Kinetic Facade","Game","Projection Mapping","Element"]).range(["#EE8434","#F76F8E","#2ecc71","#9b59b6","#f1c40f","#3498db","#40798C"]);
var colorMap = d3.scaleOrdinal().domain(['Installation',
										 'Kinetic Facade',
										 'Projection Mapping',
										 'Architecture Element',
										 'Media Facade',
										 'Immersive Environment',
										 'Smart House',
										 'Urban Screen',
										 'Light Architecture',
										 'Game',
										 'Mobile Application',
										 'Simulation',
										 'Smart Citizen',
										 'Architecture'
											]).range(['#87bcde',
													  '#89717f',
													  '#c4c3c3',
													  '#a599b4',
													  '#e1576d',
													  '#a0d29b',
													  '#896e54',
													  '#3e4e50',
													  '#fbde76',
													  '#f69774',
													  '#24967f',
													  '#eeaac3',
													  '#fbbfa0',
													  '#b63151'
														]);



/*	var bg_circle = canvas.selectAll("circle")
							.data(zone)										This code generates 8 concentric circles. 
							.enter()										But this creates conflicts in index and doesn't 
							.attr("cx",p1)									show all the projects. Hence it is replaced.
							.append("circle")				
							.attr("cy",p2)
							.attr("r", function(d){ return d*rdii;})
							.attr("fill","none")
							.attr("stroke","#bdc3c7")
							.attr("stroke-width",0.3); */

  //  canvas.selectAll("circle").data(zone).exit();

 //  bg_circle.remove();

// Following code places project dots on the circles. 
							 
	var dots = canvas.selectAll("circle")
	 			.data(data)
	 			.enter()
	 			.append("circle") 			
	 			.attr("cx",function(d,i){		 					 			
					if(d.rank == 6)
					{
						return p1 + rdii*Math.cos(i*11.2);

					}
					else if(d.rank == 5.5)
					{
						return p1 + 1.5*rdii*Math.cos(i);
					}
					else if(d.rank==5)
					{
						return p1 + 2*rdii*Math.cos(i);
					}
					else if(d.rank==4.5)
					{
						return p1 + 2.5*rdii*Math.cos(i);
						
					}
					else if(d.rank==4)
					{
						return p1 + 3*rdii*Math.cos(i);
					}
					else if(d.rank==3.5)
					{
						return p1 + 3.5*rdii*Math.cos(i);
					}
					else if(d.rank==3)
					{
						return p1 + 4*rdii*Math.cos(i);
					}
					else{
						 return p1 + 4.5*rdii*Math.cos(i);
					}			
	 			})
	 			.attr("cy",function(d,i){ 

	 				if(d.rank == 6)
	 				{
	 					return p2 + rdii*Math.sin(i*11.2);

	 				}
	 				else if(d.rank==5.5)
	 				{
	 					return p2 + 1.5*rdii*Math.sin(i);
	 				}
	 				else if(d.rank==5)
	 				{
	 					return p2 + 2*rdii*Math.sin(i);
	 				}
	 				else if(d.rank==4.5)
	 				{
	 					return p2 + 2.5*rdii*Math.sin(i);
	 				}
	 				else if(d.rank==4)
	 				{
	 					return p2 + 3*rdii*Math.sin(i);
	 				}
	 				else if(d.rank==3.5)
	 				{
	 					return p2 + 3.5*rdii*Math.sin(i);
	 				}
	 				else if(d.rank==3)
	 				{
	 					return p2 + 4*rdii*Math.sin(i);
	 				}
	 				else{
	 					 return p2 + 4.5*rdii*Math.sin(i);
	 				}
					
	 			})
	 			.attr("r",5.5)
	 			.attr("fill",function(d){ return colorMap(d.tags);})
	 			.on("mouseover", function(d){
	 				tooltip.style("display",null);
	 			})
	 			.on("click", function(d){	 						    // On click opens a model window with Star Diagram

	 					starDia(d);									

	 			/*	$("#circle-id").html(d.title);
	 				$("#space-type").html(d.spacetype);
	 				$("#point-modal").modal(); */
	 			})
	 			.on("mouseout", function(){								// Hides Project name on mouse over.
	 				tooltip.style("display","none");
	 			})
	 			.on("mousemove",function(d){                           // Shows Project name on mouse over.
	 				var xPos = d3.mouse(this)[0]-15;
	 				var yPos = d3.mouse(this)[1]-40;

	 				tooltip.attr("transform","translate("+ xPos + " , "+ yPos +" )");

	 				tooltip.select("text").text(d.title);
	 			});

// Following code creates 8 circles.

		var c1 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);		


		 var c2 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*1.5)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);	

		var c3 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*2)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);

		var c4 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*2.5)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);
		 var c5 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*3)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);									

		 var c6 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*3.5)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);	

		var c7 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*4)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3);

		var c8 = canvas.append("circle")
		 		  .attr("cx",p1)
		 		  .attr("cy",p2)	
		 		  .attr("r",rdii*4.5)
		 		  .attr("fill","none")
		 		  .attr("stroke","#bdc3c7")	
		 		  .attr("stroke-width",0.3); 

	 			var tooltip = canvas.append("g")
	 						  .attr("class","tooltip")
	 						  .style("display","none");

	 			tooltip.append("text")
	 					.attr("x", 15)
	 					.attr("dy","1.2em")
	 					.style("font-size","1.0 em");

// This creates the star visualization on a modal window

	 			function starDia(obj){


	 				var sens = 0;
	 				var corr = 0;
	 				var dyn = 0;
	 				var pre = 0;
	 				var tech = 0.5;
	 				var sp = 1 ;

	 				var sen = obj.sensing;
	 				if(sen=="yes"){

	 					sens = 1;
	 				}else{
	 					0;
	 				}
	 				var corres = obj.correspondance;
	 				if(corres=="yes"){

	 					corr= 1;
	 				}else{
	 					0;
	 				}
	 				var dyna = obj.dynamicity;
	 				if(dyna=="yes"){

	 					dyn = 1;
	 				}else{
	 					0;
	 				}
	 				var pres = obj.presense;
	 				if(pres =="performer"){
	 					pre = 1;
	 				}else{
	 					0;
	 				}
					var techno = obj.technology;
	 				if(techno=="both"){
	 					tech = 1;
	 				}else{
	 					0.5;
	 				}

	 				var dat = [
								  [
									{axis:"correspondence",value:corr},
								  	{axis:"sensing",value:sens},
									{axis:"architectural space",value:sp},
									{axis:"human presence",value:pre},
									{axis:"dynamicity",value:dyn},
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

					RadarChart.draw("#viz", dat, mycfg);   //  calls the draw function from RadarChart function.

	 				$("#details").html(obj.title);
	 				$("#tag").html(obj.tags);
	 				$("#when").html(obj.when);
	 				$("#where").html(obj.where);
	 				$("#why").html(obj.why);
	 				$("#duration").html(obj.duration);
	 				$("#how").html(obj.how);
	 				$("#point-modal").modal();






	 			}

}

