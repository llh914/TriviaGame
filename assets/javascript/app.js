$(document).ready(function() {

	var questions = [
		{	
			question: "Which is Ash's Starter Pokémon?",
			answers: ["Squirtle", "Bulbasaur", "Charmander", "Pikachu"],
			correct: "Pikachu",
			image: "assets/images/pikachu.gif"
		},
		{	
			question: "Where is Ash's Hometown?",
			answers: ["Pallet Town", "Cerulean City", "Pewter City", "Lavender Town"],
			correct: "Pallet Town",
			image: "assets/images/pallet.jpg"

		},
		{
			question: "Who is Ash's rival from his hometown?",
			answers: ["Team Rocket", "Gary Oak", "Giovanni", "Professor Oak"],
			correct: "Gary Oak",
			image: "assets/images/gary.gif"
		},
		{	
			question: "Which is the first gym badge that Ash earns?",
			answers: ["Cascade Badge", "Boulder Badge", "Thunder Badge", "Soul Badge"],
			correct: "Boulder Badge",
			image: "assets/images/boulder.gif"
		},
		{
			question: "To protect the world from _________________.",
			answers: ["gravitation", "trouble", "evil", "devastation"],
			correct: "devastation",
			image: "assets/images/rocket.gif"	
		},
		{
			question: "In which direction does poliwag's swirl spiral?",
			answers: ["Clockwise", "Counterclockwise", "Poliwag doesn't have a swirl"],
			correct: "Clockwise",
			image: "assets/images/poliwag.gif"	
		},
		{
			question: "Who is Team Rocket's boss?",
			answers: ["Professor Oak", "Sabrina", "Gary Oak", "Giovanni"],
			correct: "Giovanni",
			image: "assets/images/giovanni.jpeg"
		},
		{
			question: "Misty is an expert on whay type of Pokémon?",
			answers: ["Fire", "Grass", "Water", "Rock"],
			correct: "Water",
			image: "assets/images/misty.gif"
		},
		{
			question: "Brock is an expert on whay type of Pokémon?",
			answers: ["Fire", "Grass", "Water", "Rock"],
			correct: "Rock",
			image: "assets/images/brock.gif"
		},
		{
			question: "In the original series, how did Ash get his hat?",
			answers: ["He found it", "He stole it", "He won it in a contest", "It was a gift"],
			correct: "He won it in a contest",
			image: "assets/images/ash.gif"
		}
	];

	var timeRemaining = 15;
	var timer;
	var currentQuestion = -1;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var answerImage = $("<img>");

	

	$("#startOver").hide();


	function countdown() {
		timeRemaining --;
		$("#time").text("Time Remaining: " + timeRemaining  + " seconds");
		if (timeRemaining  == 0) {
			clearInterval(timer);
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Out of Time!");
			$("#correctAnswer").html("The Correct Answer is " + questions[currentQuestion].correct);
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			unanswered++;
			setTimeout(start, 5000);
		};
	};

	function displayAns(array) {
		for (var i = 0; i<array.length; i++) {
			var options = $("<button>");
			options.addClass("options");
			options.attr("data-value", array[i]);
			options.text(array[i]);
			$("#answers").append(options);
		};
	};

	function start() {
		timeRemaining = 15;
		$("#time").text("Time Remaining: " + timeRemaining  + " seconds");
		timer = setInterval(countdown, 1000);
        $(this).hide();
        currentQuestion++;
        if (currentQuestion === questions.length) {
			clearInterval(timer);
			$("#time").empty();
			$("#rightWrong").html("All done, here is how you did!");
			var newDiv = $("<div>");
			var corr = "Correct Answers: " + correct + "<br>";
			newDiv.append(corr);
			var incorr = "Incorrect Answers: " + incorrect + "<br>";
			newDiv.append(incorr);
			var unans = "Unanswered: " + unanswered + "<br>";
			newDiv.append(unans);
			$("#correctAnswer").html(newDiv);
			$("#img").empty();
			$("#startOver").show();
		} else {
	        $("#question").text(questions[currentQuestion].question);
	        displayAns(questions[currentQuestion].answers);
	        $("#correctAnswer").empty();
	        $("#rightWrong").empty();
	        $("#img").empty();
    	};
	};

	function startOver() {
		$("#rightWrong").empty();
		$("#correctAnswer").empty();
		$("#img").empty();
		currentQuestion = -1;
		console.log(currentQuestion)
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$(this).hide();
		start();
	};

	$("#start").click(start);

	$("#startOver").click(startOver);

	$(document).on("click", ".options", function(){  
		clearInterval(timer);
		if ($(this).attr("data-value") === questions[currentQuestion].correct) {
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Correct!");
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			correct++;
			setTimeout(start, 5000);
		} else if ($(this).attr("data-value") !== questions[currentQuestion].correct) {
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Nope!");
			$("#correctAnswer").html("The Correct Answer is " + questions[currentQuestion].correct);
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			incorrect++;
			setTimeout(start, 5000);
		} ;
	});
});