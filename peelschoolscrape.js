var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');
var listOfSchools = [];
var counter = 0;
var indexes = 0;


console.log("START \n");




var next = function(){
	console.log("ALL PEELSCHOOLS: \n");

	counter = 0;

	for(var i = 0; i < listOfSchools.length; i++){
		
		if(counter  <= 3){
		console.log(chalk.cyan(listOfSchools[i]));	
		}else if(counter <= 6){
		console.log(chalk.blue(listOfSchools[i]));
		}else if(counter <= 9){
		console.log(chalk.green(listOfSchools[i]));	
		}else if(counter <= 12){
		console.log(chalk.red(listOfSchools[i]));		
		}else if(counter >= 13){
			counter = 0;
		}
		
		counter++;
		
 
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















