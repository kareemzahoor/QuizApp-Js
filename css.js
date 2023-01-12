// CSSallquizes
var quizQuestions = [
    {
        question: "Q1 : What does CSS stand for?",
        a: "Creative Style Sheet",
        b: "Cascading Style Sheet",
        c: "Computer Style Sheet",
        d: "Colorful Style Sheet",
        ans: "ans2",
    },
    {
        question: "Q2 : What is the correct HTML for referring to an external style sheet?",
        a: "<'stylesheet>mystyle.css</stylesheet'>",
        b: "<'link rel='stylesheet' type='text/css' href='mystyle.css''>",
        c: "<'style src='mystyle.css'>",
        d: "<'style>mystyle.css</style'>",
        ans: "ans2",
    },
    {
        question: "Q3 : Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <'body'> section",
        b: "In the <'head'> section",
        c: "At the end of Document",
        d: "<'body'> and <'head'> section",
        ans: "ans2",
    },
    {
        question: "Q4 : Which HTML tag is used to define an internal style sheet?",
        a: "<'style'>",
        b: "<'script'>",
        c: "<'css'>",
        d: "<'head'>",
        ans: "ans1",
    },
    {
        question: "Q5 : Which HTML attribute is used to define inline styles?",
        a: "styles",
        b: "class",
        c: "font",
        d: "style",
        ans: "ans4",
    },
    {
        question: "Q6 : Which is the correct CSS syntax?",
        a: "{body;color:black;}",
        b: "body {color:black;}",
        c: "{body:color=black;}",
        d: "body:color:black;",
        ans: "ans2",
    },
    {
        question: "Q7 : How do you insert a comment in a CSS file?",
        a: "// this is comment",
        b: "/* this is a commment */",
        c: "// this is a comment //",
        d: "'this is a comment",
        ans: "ans2",
    },
    {
        question: "Q8 : Which property is used to change the background color?",
        a: "background-color",
        b: "bgcolor",
        c: "color",
        d: "backgrounf",
        ans: "ans1",
    },
    {
        question: "Q9 : How do you add a background color for all <'h1'> elements?",
        a: "h1.all {background-color:white;}",
        b: "all.h1 {background-color:white;}",
        c: "h1 {background-color:white;}",
        d: "h1.background-color:white",
        ans: "ans3",
    },
    {
        question: "Q10 : Which CSS property is used to change the text color of an element?",
        a: "fgcolor",
        b: "text-color",
        c: "color",
        d: "font-color",
        ans: "ans3",
    },
    {
        question: "Q11 : Which CSS property controls the text size?",
        a: "text-size",
        b: "font-style",
        c: "text-style",
        d: "font-size",
        ans: "ans4",
    },
    {
        question: "Q12 : What is the correct CSS syntax for making all the <p> elements bold?",
        a: "p {text-size:bold;}",
        b: "<'p style='font-size:bold;''>",
        c: "p {font-weight:bold;}",
        d: "<'p style='text-size:bold;''>",
        ans: "ans3",
    },
    {
        question: "Q13 : How do you display hyperlinks without an underline?",
        a: "a {text-decoration:none;}",
        b: "a {underline:none;}",
        c: "a {text-decoration:no-underline;}",
        d: "a {decoration:no-underline;}",
        ans: "ans1",
    },
    {
        question: "Q14 : How do you make each word in a text start with a capital letter?",
        a: "text-transform:capitalize",
        b: "transform:capitalize",
        c: "you can't do that with css",
        d: "text-style:capitalize",
        ans: "ans1",
    },
    {
        question: "Q15 : Which property is used to change the font of an element?",
        a: "font-weight",
        b: "font-family",
        c: "font-style",
        d: "font-size",
        ans: "ans2",
    },
    {
        question: "Q16 : How do you make the text bold?",
        a: "style:bold;",
        b: "font:bold;",
        c: "font-weight:bold;",
        d: "font-style:bold",
        ans: "ans3",
    },
    {
        question: "Q17 : Which property is used to change the left margin of an element?",
        a: "padding-left",
        b: "margin-left",
        c: "indent",
        d: "left-margin",
        ans: "ans2",
    },
    {
        question: "Q18 : When using the padding property; are you allowed to use negative values?",
        a: "No",
        b: "Yes",
        c: "negative",
        d: "value",
        ans: "ans1",
    },
    {
        question: "Q19 : How do you make a list that lists its items with squares?",
        a: "list-style-type: square;",
        b: "list-type: square;",
        c: "list: square;",
        d: "list-style: square;",
        ans: "ans1",
    },
    {
        question: "Q20 : How do you select an element with id 'demo'?",
        a: ".demo",
        b: "*demo",
        c: "#demo",
        d: "demo",
        ans: "ans3",
    },
    {
        question: "Q21 : How do you select elements with class name 'test'?",
        a: ".test",
        b: "#test",
        c: "*test",
        d: "test",
        ans: "ans1",
    },
    {
        question: "Q22 : How do you select all p elements inside a div element?",
        a: "div + p",
        b: "div p",
        c: "div.p",
        d: "div.all.p",
        ans: "ans2",
    },
    {
        question: "Q23 : How do you group selectors?",
        a: "Separate each selecter with a comma",
        b: "Separate each selecter with a space",
        c: "Separate each selecter with a plus sign",
        d: "Separate each selecter with a dot",
        ans: "ans1",
    },
    {
        question: "Q24 : What is the default value of the position property?",
        a: "fixed",
        b: "relative",
        c: "absolute",
        d: "static",
        ans: "ans4",
    },
    {
        question: "Q25 : Which property is used to change the left padding of an element?",
        a: "padding-left",
        b: "margin-left",
        c: "indent",
        d: "left-padding",
        ans: "ans1",
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


var duration = 40;
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