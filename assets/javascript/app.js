$(document).ready(function() {
	
	
	// initial list of GIF searches to display
	var searchGIFs = ["wilford brimley", "minions", "floor is lava", "fidget spinner", "why is the rum gone"];

	// API call test
	// API key: 8822962b66364b79b9f1e796900f3a96 
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=wilford+brimley&api_key=8822962b66364b79b9f1e796900f3a96&limit=10");
	xhr.done(function(data) { console.log("success got data", data); });

	// function to create buttons for each searchGIF choice
	function createButtons() {	

		for (i = 0 ; i < searchGIFs.length ; i++){
			
			//add +'s to the button values, for API call searches
			var dataValue = searchGIFs[i].replace(/\s+/g,"+");

			//create a button for each string in the searchGIFs array
			$("#buttons").append('<button class="btn btn-info" value="' + dataValue + '">' 
			+ searchGIFs[i]  + '</button>');
		}
	};

	createButtons();

	//to do: click event - change the images to the button selected
		// need the image, rating from the API call data returned
		// display the next 10 GIFs
		// data.rating, data[i].images.fixed_height and data[i].images.fixed_height_still

	// to do: toggle event for clicking each image to start and stop GIF animation

	//to do: function - add a new search parameter
	$("#add-me").click(function() {
		console.log(this);
	});	
		// accept the entered field
		// add the phrase as a string to the searchGIFs array
		// call the createButtons function to build buttons

});