//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var ShinScore = 0;
var TakScore = 0;
var YeoScore = 0;
var SunScore = 0;
var HwaScore = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
//Question 1 vars
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

//Question 2 vars
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

//Question 3 vars
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

//Question 4 vars
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

//Question 5 vars
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");

//Question 6 vars
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var q6a5 = document.getElementById("q6a5");

var restart = document.getElementById("restart");
var result = document.getElementById("result");

//Disable Question 1 
function disableq1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a5.disabled = true;
}
//Disable Question 2 
function disableq2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a5.disabled = true;
}
//Disable Question 3 
function disableq3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a5.disabled = true;
}
//disable Question 4 
function disableq4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a5.disabled = true;
}
//Disable Question 5 
function disableq5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q5a5.disabled = true;
}
//Disable Question 6
function disableq6() {
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
  q6a5.disabled = true;
}

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Shin);
q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", Hwa);
q1a2.addEventListener("click", disableq1);
q1a3.addEventListener("click", Tak);
q1a3.addEventListener("click", disableq1);
q1a4.addEventListener("click", Yeo);
q1a4.addEventListener("click", disableq1);
q1a5.addEventListener("click", Sun);
q1a5.addEventListener("click", disableq1);

q2a1.addEventListener("click", Shin);
q2a1.addEventListener("click", disableq2);
q2a2.addEventListener("click", Hwa);
q2a2.addEventListener("click", disableq2);
q2a3.addEventListener("click", Tak);
q2a3.addEventListener("click", disableq2);
q2a4.addEventListener("click", Sun);
q2a4.addEventListener("click", disableq2);
q2a5.addEventListener("click", Yeo);
q2a5.addEventListener("click", disableq2);

q3a1.addEventListener("click", Yeo);
q3a1.addEventListener("click", disableq3);
q3a2.addEventListener("click", Sun);
q3a2.addEventListener("click", disableq3);
q3a3.addEventListener("click", Shin);
q3a3.addEventListener("click", disableq3);
q3a4.addEventListener("click", Hwa);
q3a4.addEventListener("click", disableq3);
q3a5.addEventListener("click", Tak);
q3a5.addEventListener("click", disableq3);

q4a1.addEventListener("click", Hwa);
q4a1.addEventListener("click", disableq4);
q4a2.addEventListener("click", Tak);
q4a2.addEventListener("click", disableq4);
q4a3.addEventListener("click", Yeo);
q4a3.addEventListener("click", disableq4);
q4a4.addEventListener("click", Sun);
q4a4.addEventListener("click", disableq4);
q4a5.addEventListener("click", Shin);
q4a5.addEventListener("click", disableq4);

q5a1.addEventListener("click", Hwa);
q5a1.addEventListener("click", disableq5);
q5a2.addEventListener("click", Shin);
q5a2.addEventListener("click", disableq5);
q5a3.addEventListener("click", Sun);
q5a3.addEventListener("click", disableq5);
q5a4.addEventListener("click", Tak);
q5a4.addEventListener("click", disableq5);
q5a5.addEventListener("click", Yeo);
q5a5.addEventListener("click", disableq5);

q6a1.addEventListener("click", Sun);
q6a1.addEventListener("click", disableq6);
q6a2.addEventListener("click", Shin);
q6a2.addEventListener("click", disableq6);
q6a3.addEventListener("click", Hwa);
q6a3.addEventListener("click", disableq6);
q6a4.addEventListener("click", Tak);
q6a4.addEventListener("click", disableq6);
q6a5.addEventListener("click", Yeo);
q6a5.addEventListener("click", disableq6);

restart.addEventListener("click", restartButton);

//#TODO: Define quiz functions here
function Shin() {
  ShinScore += 1;
  questionCount += 1;
   if (questionCount >= 6){
      updateResult();
  }
}

function Tak() {
  TakScore += 1;
  questionCount += 1;
   if (questionCount >= 6) {
      updateResult();
  }
}

function Yeo() {
  YeoScore += 1;
  questionCount += 1;
   if (questionCount >= 6){
      updateResult();
  }
}

function Sun() {
  SunScore += 1;
  questionCount += 1; 
    if (questionCount >= 6) {
    updateResult();
  }
}

function Hwa() {
  HwaScore += 1;
  questionCount += 1; 
  if (questionCount >= 6) {
    updateResult();
  }
}


function updateResult(){
 if (ShinScore >= 3){
         result.innerHTML = "You are Kim Shin!";
 }
 else if(TakScore >=3){
        result.innerHTML = " You are Ji Eun-Tak!";
 }
 else if(YeoScore >=3){
    result.innerHTML = "You are Wang Yeo!";
 }
 else if (SunScore>= 3){
    result.innerHTML = "You are Kim Sun!";
 }
  else if (HwaScore>= 3){
    result.innerHTML = "You are Yoo Deok-Hwa!";
 }
 else{
    result.innerHTML = "Hmm.. The Goblin's powers is confused. Try again later.";
 }
}




//reset 
function restartButton () {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  ShinScore = 0;
  TakScore = 0;
  YeoScore = 0;
  SunScore = 0;
  HwaScore = 0;
}

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a5.disabled = false; 
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a5.disabled = false; 
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a5.disabled = false; 
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q4a5.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q5a5.disabled = false; 
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;
  q6a5.disabled = false; 
}