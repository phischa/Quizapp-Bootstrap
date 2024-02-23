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
    },
    {
        "question": "Wie kann man den HTML Teil mit JS verändern?",
        "answer_1": "mit .innerHTML",
        "answer_2": "mit .splice",
        "answer_3": "mit .style",
        "answer_4": "mit .changeHTML",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache braucht man fürs Frontend",
        "answer_1": "R",
        "answer_2": "C#",
        "answer_3": "C++",
        "answer_4": "JavaScript",
        "right_answer": 4
    }
];

let currentQuestion = 0; //legt fest, dass die 1.Frage Stelle 0 ist
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById("all-questions").innerHTML = questions.length; //Zahl an der Stelle so lang wie die Zahl aller Fragen
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) { //show endscreen
        document.getElementById('end-screen').style = '';
        document.getElementById('card-body').style = 'display: none';

        document.getElementById("amount-of-questions").innerHTML = questions.length;
        document.getElementById("amount-of-right-answers").innerHTML = rightAnswers;

    } else { //show next question
        let percent = currentQuestion / questions.length; //Prozentrechnung des Fortschritts
        percent = Math.round(percent * 100); //Math.round rundet das Ergebnis
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        let question = questions[currentQuestion];
        document.getElementById("question-text").innerHTML = question['question'];
        document.getElementById("answer_1").innerHTML = question['answer_1'];
        document.getElementById("answer_2").innerHTML = question['answer_2'];
        document.getElementById("answer_3").innerHTML = question['answer_3'];
        document.getElementById("answer_4").innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion]; //question = questions[0]
    let selectedQuestionNumber = selection.slice(-1); //der letzte character von selection(als die jeweilige Zahl) wird extrhiert und ist gleich selectedQuestionNumber
    let idOfRightAnswer = `answer_${question['right_answer']}`; //${...} fügt die Zahl questions[right_answer][x] ein.
    if (selectedQuestionNumber == question['right_answer']) { //Wenn Überieinstimmung
        document.getElementById(selection).parentNode.classList.add('bg-success'); //parentNode um an die übergeordnete Div der id="answer_3" zu kommen und diese die Klasse hinzuzufügen.
        rightAnswers++; // Variable wird um 1 erhöht. Wichtig für die Anzeige auf dem Endscreen
        AUDIO_SUCCESS.play();
    } else { // Wenn keine Übereinstimmung
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
    document.getElementById("next-button").disabled = false; //Nächste Frage Button wird klickbar
}

function nextQuestion() {
    currentQuestion++; //Variable wird z.B. von 0 auf 1 erhöht um auf die nächste Frage zuzugreifen
    document.getElementById("current-question-number").innerHTML = currentQuestion + 1; //+1, weil currentQuestion bei 0 startet. Die Fragen aber bei 1 von x (nicht 0 von x)
    resetAddedClasses(); //Bevor die nächste Frage angezeigt wird, werden erstmal die added Classes entfernt
    showQuestion(); //zeigt nächste Frage
}

function resetAddedClasses() { //entfernt die Klassen die in der function answer() geändert wurden
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

function restartGame() {
    document.getElementById('end-screen').style = 'display: none'; //Versteckt die Endbildschrim
    document.getElementById('card-body').style = ''; //Entfernt die Display: none Eigenschaft
    document.getElementById('current-question-number').innerHTML = 1;
    rightAnswers = 0; //Zurücksetzen
    currentQuestion = 0; //Zurücksetzen
    init();
}