var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('listening on localhost -- success');
});

var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');
var listOfSchools = [];
var counter = 0;
var indexes = 0;
var empty = false;
var baseGoogleUrl = 'https://www.google.ca/maps/search/'



console.log("START \n");

var isEmpty = function(school){
	if(
		school.charAt(0) != 'A' &&
		school.charAt(0) != 'B' &&
		school.charAt(0) != 'C' &&
		school.charAt(0) != 'D' &&
		school.charAt(0) != 'E' &&
		school.charAt(0) != 'F' &&
		school.charAt(0) != 'G' &&
		school.charAt(0) != 'H' &&
		school.charAt(0) != 'I' &&
		school.charAt(0) != 'J' &&
		school.charAt(0) != 'K' &&
		school.charAt(0) != 'L' &&
		school.charAt(0) != 'M' &&
		school.charAt(0) != 'N' &&
		school.charAt(0) != 'O' &&
		school.charAt(0) != 'P' &&
		school.charAt(0) != 'Q' &&
		school.charAt(0) != 'R' &&
		school.charAt(0) != 'S' &&
		school.charAt(0) != 'T' &&
		school.charAt(0) != 'U' &&
		school.charAt(0) != 'V' &&
		school.charAt(0) != 'W' &&
		school.charAt(0) != 'X' &&
		school.charAt(0) != 'Y' &&
		school.charAt(0) != 'Z' ){
		return "empty";
	}
}


var addressScrape = function(address){
	var addressSplit = address.split(" ");
	var len = addressSplit.length;
	var url = "";

	for(var i = 0; i < len; i++){

		var temp = addressSplit[i] + "%20";
		var url = url + temp;
	}

	request(baseGoogleUrl + url, function(err, resp, html){
		console.log(html);
	});


	
}


var next = function(){
	console.log("ALL PEELSCHOOLS: \n");

	counter = 0;

	for(var i = 0; i < listOfSchools.length; i++){

		var temp = listOfSchools[i].split(" ");

		var typeOfSchool = temp[temp.length - 2];
		

		// console.log(typeOfSchool + "\t");
		

		if(typeOfSchool == "Public"){
			console.log(chalk.cyan(listOfSchools[i]));
		}else if (typeOfSchool == "Middle"){
			console.log(chalk.red(listOfSchools[i]));
		}else if (typeOfSchool == "Secondary"){
			console.log(chalk.black(listOfSchools[i]));
		}else{
			console.log(chalk.blue(listOfSchools[i]));
		}

		addressScrape(listOfSchools[i]);

		// 	if(counter  <= 3){
		// 	console.log(chalk.cyan(listOfSchools[i]));	
		// 	}else if(counter <= 6){
		// 	console.log(chalk.blue(listOfSchools[i]));
		// 	}else if(counter <= 9){
		// 	console.log(chalk.green(listOfSchools[i]));	
		// 	}else if(counter <= 12){
		// 	console.log(chalk.red(listOfSchools[i]));		
		// 	}else if(counter >= 13){
		// 		counter = 0;
		// 	}
		

		
		// counter++;
		
		}
 
	}





var sixth = function(){
	request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=V' , function(err, resp, html){
		var $ = cheerio.load(html);
		
		$('div.ps-schoollink' , 'td').each(function(){

			indexes++;
			var school = $(this).text();
			var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
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
				var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
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
			var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
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
				var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
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
				var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
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
			var check = isEmpty(school);
			if(check == "empty"){
				// console.log("debug checks")
			}else{
				listOfSchools.push(school);
			}
			// console.log(school);
		});
		second();
	});
	
}

first();


