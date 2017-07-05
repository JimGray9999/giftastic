$(document).ready(function() {
	
	
	// initial list of GIF searches to display
	var searchGIFs = ["wilford brimley", "minions", "floor is lava", "fidget spinner", "why is the rum gone"];

	// API call test
	// API key: 8822962b66364b79b9f1e796900f3a96 
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=wilford+brimley&api_key=8822962b66364b79b9f1e796900f3a96&limit=5");
	xhr.done(function(data) { console.log("success got data", data); });

	//to do: function to create buttons for each searchGIF choice

});