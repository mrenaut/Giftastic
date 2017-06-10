
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
			
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + actorName + "&limit=10&rating=g" + "&api_key=" + apiKey;

			var gifURL = "";

			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response) {								

						// Saving the image property
		        var imageUrl = response.data[0].images.fixed_height_still.url;
		        console.log(imageUrl);
		        		//Saving the animated gif property
		        var gifURL = response.data[0].images.fixed_height.url;

		        var rating = response.data[0].rating;
		        console.log(rating);

		    

 				//for loop that lists all 10 gifs 
		        for(var i = 0; i<response.data.length; i++) {
		        // inputs image and makes source gifURL
		        $("#images").prepend("<img src='" + response.data[i].images.fixed_height_still.url +
		        "' class='gifPic'>");
		        		        
		        // Adds the ratings line to the beginning of each image div
		        $("#images").prepend("<p>Rating: " + response.data[i].rating + "</p>");
			}

      
   	    //function for click even on gif to play
			$(document).on("click", ".gifPic", function(event) {
				console.log("working");
				 if (src = "response.data[i].images.fixed_height_still.url") {
				 	console.log("doubleworking");
				 	$(this).attr("src", gifURL);
				 	
				 }
			});


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


		
//end of document.ready function
});