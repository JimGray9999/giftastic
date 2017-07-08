$(document).ready(function() {
	// initial list of GIF searches
	var searchGIFs = ["wilford brimley", "minions", "floor is lava", 
					  "fidget spinner", "why is the rum gone"];

	// function to create buttons for each searchGIF choice
	function createButtons() {	
		$("#buttons").empty();

		for (i = 0 ; i < searchGIFs.length ; i++){
			
			//add +'s to the button data-value, for API call searches
			var dataValue = searchGIFs[i].replace(/\s+/g,"+");

			//create a button for each string in the searchGIFs array
			$("#buttons").append('<button class="btn btn-info show-gif" data-value="' + dataValue + '">' 
			+ searchGIFs[i]  + '</button>');
		};
		console.log(searchGIFs);
	};

	function addButton() {

		var dataValue = searchGIFs[searchGIFs.length - 1].replace(/\s+/g,"+");

		$("#buttons").append('<button class="btn btn-info show-gif" data-value="' + dataValue + '">' 
			+ searchGIFs[searchGIFs.length - 1]  + '</button>');

		console.log(searchGIFs);
	};

	createButtons(); // create the initial buttons
		
	$("body").on("click", ".show-gif", function() {

		$("#gifs").empty();

		var search = $(this).attr("data-value");
		console.log(search);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=8822962b66364b79b9f1e796900f3a96&limit=10";

		$.ajax({
	      url: queryURL,
    	  method: "GET"
    	}).done(function(response) {
    		console.log(response);

			for (i = 0 ; i < 10 ; i++){
				
				$("#gifs").append('<img src="' 
					+ response.data[i].images.fixed_height_still.url 
					+'" data-still="' + response.data[i].images.fixed_height_still.url
					+ '" data-animate="' + response.data[i].images.fixed_height.url 
					+ '" data-state="still" alt="gif-' + (i + 1) 
					+ '" class="gif-it">');

				$("#gifs").append('<p>Rating: ' + response.data[i].rating + '</p>');
			};
    	});
	});

	//function - animate gif on click
	$("body").on("click", ".gif-it", function() {
		console.log("image was clicked");

		var state = $(this).attr("data-state");
		console.log(state);

		if (state === "still"){
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate");
		} else {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	});

	//function - add a new search button
	$("#add-me").on("click", function() {
		searchGIFs.push($("#new-search").val());
		addButton();
	});	


});