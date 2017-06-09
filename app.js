
//alert("working");

$(document).ready(function() {

//Global Variables
//Actors listed
var actors = ["Angelina Jolie", "Brad Pitt", "Charlize Theron", "Danny Trejo", "Emma Watson", "Frankie Muniz",
"Gary Oldman", "Harrison Ford", "Isabella Rossellini", "Jack Nicholson", "Kaley Cuoco", "Lena Dunham", "Maggie Gyllenhaal", 
"Natalie Portman", "Olivia Munn", "Patricia Arquette", "Queen Latifah", "Rachel McAdams", "Sacha Baron Cohen",
"Tina Fey", "Uma Thurman", "Vince Vaughn", "Whoopi Goldberg", "Xhibit", "Yasmine Bleeth", "Zac Effron"];

//API key for Giphy
var apiKey = "dc6zaTOxFJmzC";

		//function that gets information from button and displays it in gif section
		function displayActorGif(){
			var actorName = $(this).attr("data-name");
			
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + actorName + "&limit=10" + "&api_key=" + apiKey;

			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response) {
				//varible to hold response data
				var results = response.data;
					console.log(response);
				

				// Saving the image_original_url property
        var imageUrl = response.data[0].images.fixed_height_small.url;
        console.log(imageUrl);

        // Creating and storing an image tag
        var actorGif = $("<img>");

        // Setting the catImage src attribute to imageUrl
        actorGif.attr("src", imageUrl);
        actorGif.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $("#images").prepend(actorGif);

        //$('#gifsDiv').html(JSON.stringify(response));
			
				renderButtons();


			})
		}
		


	//Function for displaying actor buttons
	function renderButtons() {

		// Deletes content in button section to avoid repeat buttons        
        $('#buttonsSection').empty();

	//For loop to create a button for each of the actors listed in the array
	for (var i=0; i<actors.length; i++) {
		var b = $('<button>');
		b.addClass("actor");
		b.attr("data-name", actors[i]); 
		b.text(actors[i]);
		$("#buttonsSection").append(b);
	}
}

	//add a button of the user's chosing when user fills out form and hits the submit button
	$("#submitButton").on("click", function(event) {

		event.preventDefault();
		var newActor = $("#actorInput").val().trim();
		actors.push(newActor);
		console.log(actors);
		renderButtons();

	});
		//event listener for when the actor button is clicked
		$(document).on("click", ".actor", displayActorGif);

		//makes sure buttons are rendered after being added
		renderButtons();

	//need to access the api and pass the information from the button into it



	//capture what the api returns

	//display the gifs from api

	

		
//end of document.ready function
});