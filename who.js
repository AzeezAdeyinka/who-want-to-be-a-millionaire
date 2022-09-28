
var questionBank = [
    {
      question : "Grand Central Terminal, Park Avenue, New York is the world's",
      Option : ["largest railway station", "highest railway station", "longest railway station", "None of the above"],
      answer : "largest railway station"
    },

    {
        question : "Entomology is the science that studie",
        Option : ["Behavior of human being", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],
        answer : "Insects"
    },

    {
        question : "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        Option : ["Asia", "Africa", "Europe", "	Australia"],
        answer : "Asia"
    },

    {
        question : "Garampani sanctuary is located at",
        Option : ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"],
        answer : "Junagarh"
    },

    {
        question : "Hitler party which came into power in 1933 is known as",
        Option : ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
        answer : "Nazi Party"
    },
]

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard")
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");

var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');

var i=0;
var score = 0;

function displayQuestion(){
    for(let a=0; a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML = 'Q.'+(i+1)+''
    +questionBank[i].question;
    option0.innerHTML = questionBank[i].Option[0];
    option1.innerHTML = questionBank[i].Option[1];
    option2.innerHTML = questionBank[i].Option[2];
    option3.innerHTML = questionBank[i].Option[3];

    stat.innerHTML = "Question" + '' +(i+1)+ ''+ 'of' + ' ' + questionBank.length;  
}

function calscore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score = score+1;
        document.getElementById(e.id).style.background= 'limegreen'
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

function nextQuestion(){
    if(i<questionBank.length-1){
       i=i+1;
       displayQuestion(); 
    }
    else{
        points.innerHTML = score+ '/'+
        questionBank.length;
        quizContainer.style.display = 'block'
    }
}

next.addEventListener('click', nextQuestion);

function backToQuiz(){
    location.reload();
}

function checkAnswer(){
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'block';
    for(var a=0;a<questionBank.length;a++)

    {
        var list= document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
} 
displayQuestion();

