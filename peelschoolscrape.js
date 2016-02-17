var request = require('request');
var cheerio = require('cheerio');
var listOfSchools = [];
var counter = 0;
var indexes = 0;


console.log("START \n");




var next = function(){
	console.log("we're done");

	for(var i = 0; i < listOfSchools.length; i++){
		console.log(listOfSchools[i]);
	}

}

var sixth = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=V' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});

		next();

	});
	
}

var fifth = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=Q' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});
		sixth();
	});
	
}

var fourth = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=M' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});
		fifth();
	});
	
}

var third = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=I' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});
		fourth();
	});
	
}

var second = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=E' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});
		third();
	});
	
}



var first = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=A' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			
			listOfSchools.push(school);
			// console.log(school);
		});
		second();
	});
	
}

first();















