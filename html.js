// htmlallquizes
var quizQuestions = [
    {
        question: "Q1 : What Does HTML Stand For?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "How Text Markup Language",
        ans: "ans1",
    },
    {
        question: "Q2 : Who is making the Web standards?",
        a: "Mozilla",
        b: "Google",
        c: "The World Wide Web Consortium",
        d: "Microsoft",
        ans: "ans3",
    },
    {
        question: "Q3 : Choose the correct HTML element for the largest heading:",
        a: "heading",
        b: "heading2",
        c: "<'h1'>",
        d: "heading6",
        ans: "ans3",
    },
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        a: "<'br'>",
        b: "lb",
        c: "break",
        d: "bra",
        ans: "ans1",
    },
    {
        question: "Q5 : What is the correct HTML for adding a background color?",
        a: "body bg='yellow'",
        b: "<'body style='background-color:yellow;''>",
        c: "yellow",
        d: "<'body background-color='yellow''>",
        ans: "ans2",
    },
    {
        question: "Q6 : Choose the correct HTML element to define important text:",
        a: "i",
        b: "<'strong'>",
        c: "important",
        d: "b",
        ans: "ans2",
    },
    {
        question: "Q7 : Choose the correct HTML element to define emphasized text:",
        a: "<'em'>",
        b: "i",
        c: "italic",
        d: "abr",
        ans: "ans1",
    },
    {
        question: "Q8 : Which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        d: "^",
        ans: "ans1",
    },
    {
        question: "Q9 : Which of these elements are all <'table'> elements?",
        a: "<'table'> <'tr'> <'td'>",
        b: "<'table'> <'td'> <'tr'>",
        c: "<'table'> <'tr'> <'tt'>",
        d: "<'thead'> <'body'> <'tt'>",
        ans: "ans1",
    },
    {
        question: "Q10 : How can you make a numbered list?",
        a: "<'dl'>",
        b: "<'ol'>",
        c: "<'list'>",
        d: "<'ul'>",
        ans: "ans2",
    },
    {
        question: "Q11 : How can you make a bulleted list?",
        a: "<'list'>",
        b: "<'ol'>",
        c: "<'dl'>",
        d: "<'ul'>",
        ans: "ans4",
    },
    {
        question: "Q12 : What is the correct HTML for making a checkbox?",
        a: "<'input type='checkbox''>",
        b: "<'check'>",
        c: "<'input type='check''>",
        d: "<'checkbox'>",
        ans: "ans1",
    },
    {
        question: "Q13 : What is the correct HTML for making a text input field?",
        a: "<'input type='text''>",
        b: "<'textfield'>",
        c: "<'input type='textfield''>",
        d: "<'text'>",
        ans: "ans1",
    },
    {
        question: "Q14 : What is the correct HTML for making a drop-down list?",
        a: "<'input type='dropdown''>",
        b: "<'select'>",
        c: "<'input type='list''>",
        d: "<'list'>",
        ans: "ans2",
    },
    {
        question: "Q15 : Which HTML element defines the title of a document?",
        a: "<'meta'>",
        b: "<'head'>",
        c: "<'title'>",
        d: "<'body'>",
        ans: "ans3",
    },
    {
        question: "Q16 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed",
        a: "title",
        b: "alt",
        c: "longdesc",
        d: "src",
        ans: "ans2",
    },
    {
        question: "Q17 : Which doctype is correct for HTML5?",
        a: "<'!DOCTYPE html'>",
        b: "<'!DOCTYPE HTML5'>",
        c: "<'!DOCTYPE html public'>",
        d: "<'!DOCTYPE html5i'>",
        ans: "ans1",
    },
    {
        question: "Q18 : Which HTML element is used to specify a footer for a document or section?",
        a: "<'footer'>",
        b: "<'bottom'>",
        c: "<'section'>",
        d: "<'margin'>",
        ans: "ans1",
    },
    {
        question: "Q19 : What is the correct HTML element for playing video files?",
        a: "<'vedio'>",
        b: "<'media'>",
        c: "<'movie'>",
        d: "<'film'>",
        ans: "ans1",
    },
    {
        question: "Q20 : What is the correct HTML element for playing audio files?",
        a: "<'sound'>",
        b: "<'audio'>",
        c: "<'mp3'>",
        d: "<'mp4'>",
        ans: "ans2",
    },
    {
        question: "Q21 : In HTML, onblur and onfocus are:",
        a: "HTML Elements",
        b: "Event Attributes",
        c: "Style Attributes",
        d: "Tag Attributes",
        ans: "ans2",
    },
    {
        question: "Q22 : Graphics defined by SVG is in which format?",
        a: "XML",
        b: "CSS",
        c: "HTML",
        d: "SVGS",
        ans: "ans1",
    },
    {
        question: "Q23 : In HTML, which attribute is used to specify that an input field must be filled out?",
        a: "placeholder",
        b: "formvalidate",
        c: "required",
        d: "validate",
        ans: "ans3",
    },
    {
        question: "Q24 : Which input type defines a slider control?",
        a: "slider",
        b: "search",
        c: "range",
        d: "controls",
        ans: "ans3",
    },
    {
        question: "Q25 : Which HTML element is used to specify a header for a document or section?",
        a: "<'section'>",
        b: "<'head'>",
        c: "<'top'>",
        d: "<'header'>",
        ans: "ans4",
    },
]

var question = document.querySelector(".questions");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var next = document.getElementById("next");


var answers = document.getElementsByClassName("answers");

var showScore = document.querySelector("#showScore");

var qusetionCount = 0
var score = 0;
var totalQues = 25;

var header = document.querySelector(".header")
header.innerHTML = `<span id="remaining"> Questions ${totalQues} out of ${qusetionCount} </span>
<div class="timmer">00:00</div> 
`

function loadQuestion() {

    var qusetionList = quizQuestions[qusetionCount];

    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
    option4.innerHTML = qusetionList.d;
}
loadQuestion();

function getCheckAnswer() {
    var answer;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

function dselectAll() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

next.addEventListener("click", () => {
    var checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    
    if (checkedAnswer === quizQuestions[qusetionCount].ans) {
        score++;
    }

    qusetionCount++;

    dselectAll();

    if (qusetionCount < quizQuestions.length) {
        loadQuestion();
    }
    else if (score < (score/totalQues)*100) {
        showScore.innerHTML = `
          <h4> Congratulation You Have Passed ${score}/${quizQuestions.length} 🏆 </h4>
          <button onclick ="location.reload()" type="button" class="submitBtn">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
        showScore.classList.remove("card")
    }
    else {
        showScore.innerHTML = `
          <h4> You  Are Fail ${((score))}/${quizQuestions.length} 😞 </h4>
          <button  onclick ="location.reload()" type="button" class="submitBtn">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
        showScore.classList.remove("card")
    }
});


var duration = 25;
var time = duration * 60;

var countDown = document.querySelector(".timmer");

setInterval(setCountDown, 1000);

function setCountDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes}:${seconds}`;
    time--;
};