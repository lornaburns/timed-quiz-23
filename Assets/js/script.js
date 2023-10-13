var question1 = "1)	What is the correct syntax for calling a function?";
var question2 = "2)	What brackets are used for an array?";
var question3 = "3)	Which of the following is not a data type?";
var question4 = "4)	Which of the following means “equal in value and type?”";
var question5 = "5)	What method would add an item to the end of an array?";
var question6 = "6)	What method would return the number of items in an array?";
var question7 = "7)	What tag do you use to link an external JavaScript file?";
var question8 = "8)	How do you add a comment in JavaScript?";

var answerAchoices = [
  "myFunction();",
  "()",
  "Boolean",
  "!==",
  ".pop",
  ".split",
  "&lt;js&gt;",
  "//...//",
];
var answerBchoices = [
  "var myFunction();",
  "{}",
  "string",
  "===",
  ".push",
  ".entries",
  "&lt;link&gt;",
  "/*...*/",
];
var answerCchoices = [
  "myFunction{};",
  "[]",
  "conditional",
  "<=",
  ".split",
  ".length",
  "&lt;a&gt;",
  "&lt;!...&gt;",
];
var answerDchoices = [
  "myFunction=();",
  "<>",
  "number",
  "||",
  ".slice",
  ".values",
  "&lt;script&gt;",
  "(...)",
];
var answers = document.getElementById("answers");
var startButton = document.querySelector("#start-button");
var feedback = document.querySelector("#feedback");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var score = document.getElementById("score");

function loadPage() {
  document.getElementById("answers").style.display = "none";
  feedback.innerHTML = "";
  document.getElementById("initials").style.display = "none";
  document.getElementById("initials-submit").style.display = "none";
  startButton.addEventListener("click", function () {
    displayQuestion1();
  });
}
//QUESTION 1//
function displayQuestion1() {
  answers.style.display = "block";
  startButton.style.display = "none";

  document.getElementById("question").innerHTML = question1;
  answerA.innerHTML = answerAchoices[0];
  answerB.innerHTML = answerBchoices[0];
  answerC.innerHTML = answerCchoices[0];
  answerD.innerHTML = answerDchoices[0];

  answerA.addEventListener("click", handleQuestion1Correct);
  answerB.addEventListener("click", handleQuestion1Incorrect);
  answerC.addEventListener("click", handleQuestion1Incorrect);
  answerD.addEventListener("click", handleQuestion1Incorrect);
}

function handleQuestion1Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion2();
}
function handleQuestion1Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion2();
}
//QUESTION 2//
function displayQuestion2() {
  document.getElementById("question").innerHTML = question2;
  document.getElementById("answerA").innerHTML = answerAchoices[1];
  document.getElementById("answerB").innerHTML = answerBchoices[1];
  document.getElementById("answerC").innerHTML = answerCchoices[1];
  document.getElementById("answerD").innerHTML = answerDchoices[1];

  answerA.addEventListener("click", handleQuestion2Incorrect);
  answerB.addEventListener("click", handleQuestion2Incorrect);
  answerC.addEventListener("click", handleQuestion2Correct);
  answerD.addEventListener("click", handleQuestion2Incorrect);
}
function handleQuestion2Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion3();
}
function handleQuestion2Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion3();
}

//QUESTION 3//
function displayQuestion3() {
  document.getElementById("question").innerHTML = question3;
  document.getElementById("answerA").innerHTML = answerAchoices[2];
  document.getElementById("answerB").innerHTML = answerBchoices[2];
  document.getElementById("answerC").innerHTML = answerCchoices[2];
  document.getElementById("answerD").innerHTML = answerDchoices[2];

  answerA.addEventListener("click", handleQuestion3Incorrect);
  answerB.addEventListener("click", handleQuestion3Incorrect);
  answerC.addEventListener("click", handleQuestion3Correct);
  answerD.addEventListener("click", handleQuestion3Incorrect);
}
function handleQuestion3Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion4();
}
function handleQuestion3Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion4();
}

//QUESTION 4//
function displayQuestion4() {
  document.getElementById("question").innerHTML = question4;
  document.getElementById("answerA").innerHTML = answerAchoices[3];
  document.getElementById("answerB").innerHTML = answerBchoices[3];
  document.getElementById("answerC").innerHTML = answerCchoices[3];
  document.getElementById("answerD").innerHTML = answerDchoices[3];

  answerA.addEventListener("click", handleQuestion4Incorrect);
  answerB.addEventListener("click", handleQuestion4Correct);
  answerC.addEventListener("click", handleQuestion4Incorrect);
  answerD.addEventListener("click", handleQuestion4Incorrect);
}
function handleQuestion4Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion5();
}
function handleQuestion4Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion5();
}

//QUESTION 5//
function displayQuestion5() {
  document.getElementById("question").innerHTML = question5;
  document.getElementById("answerA").innerHTML = answerAchoices[4];
  document.getElementById("answerB").innerHTML = answerBchoices[4];
  document.getElementById("answerC").innerHTML = answerCchoices[4];
  document.getElementById("answerD").innerHTML = answerDchoices[4];

  answerA.addEventListener("click", handleQuestion5Incorrect);
  answerB.addEventListener("click", handleQuestion5Correct);
  answerC.addEventListener("click", handleQuestion5Incorrect);
  answerD.addEventListener("click", handleQuestion5Incorrect);
}
function handleQuestion5Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion6();
}
function handleQuestion5Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion6();
}

//QUESTION 6//
function displayQuestion6() {
  document.getElementById("question").innerHTML = question6;
  document.getElementById("answerA").innerHTML = answerAchoices[5];
  document.getElementById("answerB").innerHTML = answerBchoices[5];
  document.getElementById("answerC").innerHTML = answerCchoices[5];
  document.getElementById("answerD").innerHTML = answerDchoices[5];

  answerA.addEventListener("click", handleQuestion6Incorrect);
  answerB.addEventListener("click", handleQuestion6Incorrect);
  answerC.addEventListener("click", handleQuestion6Correct);
  answerD.addEventListener("click", handleQuestion6Incorrect);
}
function handleQuestion6Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion7();
}
function handleQuestion6Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion7();
}

//QUESTION 7//
function displayQuestion7() {
  document.getElementById("question").innerHTML = question7;
  document.getElementById("answerA").innerHTML = answerAchoices[6];
  document.getElementById("answerB").innerHTML = answerBchoices[6];
  document.getElementById("answerC").innerHTML = answerCchoices[6];
  document.getElementById("answerD").innerHTML = answerDchoices[6];

  answerA.addEventListener("click", handleQuestion7Incorrect);
  answerB.addEventListener("click", handleQuestion7Incorrect);
  answerC.addEventListener("click", handleQuestion7Incorrect);
  answerD.addEventListener("click", handleQuestion7Correct);
}
function handleQuestion7Correct() {
  feedback.innerHTML = "Correct!";
  displayQuestion8();
}
function handleQuestion7Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayQuestion8();
}

//QUESTION 8//
function displayQuestion8() {
  document.getElementById("question").innerHTML = question8;
  document.getElementById("answerA").innerHTML = answerAchoices[7];
  document.getElementById("answerB").innerHTML = answerBchoices[7];
  document.getElementById("answerC").innerHTML = answerCchoices[7];
  document.getElementById("answerD").innerHTML = answerDchoices[7];

  answerA.addEventListener("click", handleQuestion8Correct);
  answerB.addEventListener("click", handleQuestion8Incorrect);
  answerC.addEventListener("click", handleQuestion8Incorrect);
  answerD.addEventListener("click", handleQuestion8Incorrect);
}
function handleQuestion8Correct() {
  feedback.innerHTML = "Correct!";
  displayScore();
}
function handleQuestion8Incorrect() {
  feedback.innerHTML = "Incorrect!";
  displayScore();
}

function displayScore() {
  document.getElementById("question").style.display = "none";
  answers.style.display = "none";
  feedback.style.display = "none";
  score.innerHTML = "Score:";
  document.getElementById("initials").style.display = "block";
  document.getElementById("initials-submit").style.display = "block";
}
loadPage();
