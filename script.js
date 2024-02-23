let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Taylor Swift",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Billie Joe Armstrong",
        "right_answer": 3
    },
    {
        "question": "Wer hat JSON erfunden?",
        "answer_1": "Steve Jobs",
        "answer_2": "Douglas Crockford",
        "answer_3": "Larry Page",
        "answer_4": "Bill Gates",
        "right_answer": 2
    }
];

let currentQuestion = 0; //legt fest, dass die 1.Frage Stelle 0 ist
function init() {
    document.getElementById("all-questions").innerHTML = questions.length; //Zahl an der Stelle so lang wie die Zahl aller Fragen
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("question-text").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion]; //question = questions[0]
    //console.log('Selected ans is', selection);
    let selectedQuestionNumber = selection.slice(-1); //der letzte character von selection(als die jeweilige Zahl) wird extrhiert und ist gleich selectedQuestionNumber
    /* console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current Right', question['right_answer']); */
    let idOfRightAnswer = `answer_${question['right_answer']}`; //${...} fügt die Zahl questions[right_answer][x] ein.
    if (selectedQuestionNumber == question['right_answer']) { //Wenn Überieinstimmung
        document.getElementById(selection).parentNode.classList.add('bg-success'); //parentNode um an die übergeordnete Div der id="answer_3" zu kommen und diese die Klasse hinzuzufügen.
    } else { // Wenn keine Übereinstimmung
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById("next-button").disabled = false; //Nächste Frage Button wird klickbar
}

function nextQuestion() {
    currentQuestion++; //Variable wird z.B. von 0 auf 1 erhöht um auf die nächste Frage zuzugreifen
    resetAddedClasses(); //Bevor die nächste Frage angezeigt wird, werden erstmal die added Classes entfernt
    showQuestion(); //zeigt nächste Frage
}

function resetAddedClasses() {
    document.getElementById("next-button").disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}