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

let currentQuestion = 0;

function init(){
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById("question-text").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}
