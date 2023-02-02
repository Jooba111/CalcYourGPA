"use strict";

let Subject1 = document.getElementById("subject1");
let Score1 = document.getElementById("score1");
let Credit1 = document.getElementById("credit1");

let Subject2 = document.getElementById("subject2");
let Score2 = document.getElementById("score2");
let Credit2 = document.getElementById("credit2");

let Subject3 = document.getElementById("subject3");
let Score3 = document.getElementById("score3");
let Credit3 = document.getElementById("credit3");

let Subject4 = document.getElementById("subject4");
let Score4 = document.getElementById("score4");
let Credit4 = document.getElementById("credit4");

let Subject5 = document.getElementById("subject5");
let Score5 = document.getElementById("score5");
let Credit5 = document.getElementById("credit5");

function Give_Me_PG(Score) {
  if (Score >= 94 && Score <= 100) return 4.0;
  if (Score >= 91 && Score <= 93) return 3.7;
  if (Score >= 88 && Score <= 90) return 3.4;
  if (Score >= 85 && Score <= 87) return 3.1;
  if (Score >= 81 && Score <= 84) return 2.8;
  if (Score >= 78 && Score <= 80) return 2.5;
  if (Score >= 74 && Score <= 77) return 2.2;
  if (Score >= 71 && Score <= 73) return 1.9;
  if (Score >= 68 && Score <= 70) return 1.6;
  if (Score >= 64 && Score <= 67) return 1.3;
  if (Score >= 61 && Score <= 63) return 1.0;
  if (Score >= 56 && Score <= 60) return 0.8;
  if (Score >= 51 && Score <= 55) return 0.5;
  else return 0;
}

function Calc_For_Me() {
  let one, two, three, four, five;

  let PG1 = Give_Me_PG(parseInt(Score1.value));
  console.log(PG1);
  let PG2 = Give_Me_PG(parseInt(Score2.value));
  console.log(PG2);
  let PG3 = Give_Me_PG(parseInt(Score3.value));
  console.log(PG3);
  let PG4 = Give_Me_PG(parseInt(Score4.value));
  console.log(PG4);
  let PG5 = Give_Me_PG(parseInt(Score5.value));
  console.log(PG5);

  one = PG1 * parseInt(Credit1.value);
  two = PG2 * parseInt(Credit2.value);
  three = PG3 * parseInt(Credit3.value);
  four = PG4 * parseInt(Credit4.value);
  five = PG5 * parseInt(Credit5.value);

  console.log(one + two + three + four + five);

  return (
    (one + two + three + four + five) /
    (parseInt(Credit1.value) +
      parseInt(Credit2.value) +
      parseInt(Credit3.value) +
      parseInt(Credit4.value) +
      parseInt(Credit5.value))
  );
}

 document.getElementById("Mydiv2").style.visibility = "hidden";
document.querySelector("#Mybutton").addEventListener("click", function () {
  if (
    Subject1.value != "" &&
    Subject2.value != "" &&
    Subject3.value != "" &&
    Subject4.value != "" &&
    Subject5.value != "" &&
    Score1.value != "" &&
    Score2.value != "" &&
    Score3.value != "" &&
    Score4.value != "" &&
    Score5.value != "" &&
    Credit1.value != "" &&
    Credit2.value != "" &&
    Credit3.value != "" &&
    Credit4.value != "" &&
    Credit5.value != ""
  ) {
    let FINAL_GPA = Calc_For_Me();
    console.log(FINAL_GPA);
    document.getElementById("MyDiv").style.visibility = "hidden";
    document.body.style.backgroundImage = "none";

    setTimeout(() => {
      document.body.style.backgroundColor = "black";
    }, 50);
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
    }, 100);
    setTimeout(() => {
      document.body.style.backgroundColor = "blue";
    }, 150);
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
    }, 200);
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
    }, 250);
    setTimeout(() => {
      document.body.style.backgroundColor = "purple";
    }, 300);
    setTimeout(() => {
      document.body.style.backgroundColor = "fuchsia";
    }, 350);
    setTimeout(() => {
      document.body.style.backgroundColor = "navy";
    }, 400);
    setTimeout(() => {
      document.body.style.backgroundColor = "aqua";
    }, 450);

    setTimeout(() => {
      document.body.style.backgroundColor = "aqua";
    }, 450);

    setTimeout(() => {
      document.body.style.backgroundColor = "brown";
    }, 500);

    setTimeout(() => {
      document.body.style.backgroundColor = "coral";
    }, 550);

    setTimeout(() => {
      document.body.style.backgroundColor = "cornflowerblue";
    }, 600);

    setTimeout(() => {
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "url('leaves.jpg')";
      document.getElementById("Mydiv2").style.visibility = "visible";
      document.getElementById("res").innerHTML = "Your GPA: " + FINAL_GPA;
    }, 650);
  } else {
    console.log("Vai shen!");
  }
});

document.querySelector("#Again").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.getElementById("Mydiv2").style.visibility = "hidden";
  document.getElementById("MyDiv").style.visibility = "visible";
  console.log("hello");

  Subject1.value = "";
  Subject2.value = "";
  Subject3.value = "";
  Subject4.value = "";
  Subject5.value = "";
  Score1.value = "";
  Score2.value = "";
  Score3.value = "";
  Score4.value = "";
  Score5.value = "";
  Credit1.value = "";
  Credit2.value = "";
  Credit3.value = "";
  Credit4.value = "";
  Credit5.value = "";
});
