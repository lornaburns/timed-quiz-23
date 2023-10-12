var question1 = "1)	What is the correct syntax for calling a function?";
var question2 = "2)	What brackets are used for an array?";
var question3 = "3)	Which of the following is not a data type?";
var question4 = "4)	Which of the following means “equal in value and type?”";
var question5 = "5)	What method would add an item to the end of an array?";
var question6 = "6)	 What method would return the number of items in an array?";
var question7 = "7)	Where do you place the <script> tag in an html file?";
var question8 = "8)	What is the correct syntax for a for loop?";

var answerAchoices = [
  "myFunction();",
  "()",
  "Boolean",
  "!==",
  ".pop",
  ".split",
  "<js>",
  "//...//",
];
var answerBchoices = [
  "var myFunction();",
  "{}",
  "string",
  "===",
  ".push",
  ".entries",
  "<link>",
  "/*...*/",
];
var answerCchoices = [
  "myFunction{};",
  "[]",
  "conditional",
  "<=",
  ".split",
  ".length",
  "<a>",
  "<!...>",
];
var answerDchoices = [
  "myFunction=();",
  "<>",
  "number",
  "||",
  "slice",
  ".values",
  "<script>",
  "(...)",
];
var answers = document.getElementById("answers");
var startButton = document.querySelector("#start-button");
var feedback = document.querySelector("#feedback");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

function loadPage() {
  document.getElementById("answers").style.display = "none";
  feedback.innerHTML = "";
  document.getElementById("initials").style.display = "none";
  document.getElementById("initials-submit").style.display = "none";
  startButton.addEventListener("click", function () {
    displayQuestion1();
  });
}

function displayQuestion1() {
  answers.style.display = "block";
  startButton.style.display = "none";

  document.getElementById("question").innerHTML = question1;
  answerA.innerHTML = answerAchoices[0];
  answerB.innerHTML = answerBchoices[0];
  answerC.innerHTML = answerCchoices[0];
  answerD.innerHTML = answerDchoices[0];
}
answers.addEventListener("click", handleQuestion1());

function handleQuestion1() {
answerA.onclick = 

function displayQuestion2() {
  document.getElementById("question").innerHTML = question2;
  document.getElementById("answerA").innerHTML = answerA[1];
  document.getElementById("answerB").innerHTML = answerB[1];
  document.getElementById("answerC").innerHTML = answerC[1];
  document.getElementById("answerD").innerHTML = answerD[1];
}
loadPage();
