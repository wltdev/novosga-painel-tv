$(document).ready(function() {
	//feed to parse
	var feed = "http://g1.globo.com/dynamo/mundo/rss2.xml";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
    },
    headers: {
      "accept": "application/xml",
			"Access-Control-Allow-Origin":"*",
			"CORS_ALLOW_HEADERS": true	
    },
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
			console.log(data)
			// $(data).find("item").each(function () { // or "item" or whatever suits your feed
			// 	var el = $(this);
			// 	console.log("------------------------");
			// 	console.log("title      : " + el.find("title").text());
			// 	console.log("link       : " + el.find("link").text());
			// 	console.log("description: " + el.find("description").text());
			// });
	

		}	
	});
	
});