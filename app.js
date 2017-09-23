function populate(){
	if(quiz.isEnded()){

		 showScores();
	} else {
		// show questions
		var element = document.getElementById('question');

		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;

			for(var i = 0; i < choices.length; i++ ){

				var element = document.getElementById("choice" + [i]);
				element.innerHTML = choices[i]; 
				guess("btn" + i, choices[i]);
			}

			showProgress();


	}
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element 			  = document.getElementById('progress');

		element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;

}

function guess(id, guess) {
	var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			populate();

		}
}


function showScores(){
	var gameOverHTML = "<h1>Result</h1>";
		gameOverHTML += "<h2 id='score'>Your Score : " + quiz.score + "</h2>";
		var element = document.getElementById('quiz');
			element.innerHTML = gameOverHTML;

}






var questions = [
	
	new Question("Which one is not an object Oriented Programming language?", ["java", "C#", "C++", "C"], "C"),
	new Question("Which language is used for styling web pages", ["HTML", "CSS", "JQUERY", "XML"], "CSS"),
	new Question("There are _________ main components of Object Oriented Programming?", ["1", "6", "2", "4"], "4"),
	new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
	new Question("MVC is a ________ ?", ["Language", "Library", "Framework", "All"], "Framework"),
];


var quiz = new Quiz(questions);
	
	populate(); 