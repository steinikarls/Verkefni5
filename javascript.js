function Questions(question,answers,correct)
{
    this.question =question;
    this.answers = answers;
    this.correct = correct;
}
var questions =[
	new Questions("what am i?",["boy","man","girl","woman"],"man"),
	new Questions("what am is?",["boy","man","girl","woman"],"man"),
	new Questions("what am ia?",["boy","man","girl","woman"],"man")

];



function populate() {
	var el = document.getElementById('question');
	el.innerHTML = Questions[1].question;
	for (var i = 0; i < questions[1].answers.length; i++) {
		var el = document.getElementById('btn'+i)
		el.innerHTML = questions[1].answers[i]
	}
}



populate();