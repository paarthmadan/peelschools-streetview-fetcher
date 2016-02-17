var request = require('request');
var cheerio = require('cheerio');

console.log("START \n\n\n\n\n\n\n\n\n\n\n\n\n");




request('http://www.peelschools.org/schools/all/Pages/default.aspx?psb-letter=' + 'a' , function(err, resp, html){
	var $ = cheerio.load(html);
	


	$('div.ps-schoollink' , 'td').each(function(){


		var text = $(this).text();
		console.log(text);


	});



});


