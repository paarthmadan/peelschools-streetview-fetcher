var request = require('request');
var cheerio = require('cheerio');

console.log("START \n\n\n\n\n\n\n\n\n\n\n\n\n");


var scrape = function(letter){

request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=' + letter , function(err, resp, html){
	var $ = cheerio.load(html);
	


	$('div.ps-schoollink' , 'td').each(function(){


		var text = $(this).text();
		console.log(text);


	});



});

}

scrape('A');
scrape('E');
scrape('I');
scrape('M');
scrape('Q');
scrape('V');
