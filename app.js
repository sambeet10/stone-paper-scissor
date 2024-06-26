let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}
function win(userChoice, computerChoice) {
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smalluserWord} beats ${convertToWord(
    computerChoice
  )}${smallcompWord}  .You Win 😎!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
}

function lose(userChoice, computerChoice) {
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smalluserWord} loses to ${convertToWord(
    computerChoice
  )}${smallcompWord}  .You lost 😞!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
}

function draw(userChoice, computerChoice) {
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smalluserWord} equals ${convertToWord(
    computerChoice
  )}${smallcompWord}  .It's a draw 🙃!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  if (rock_div) {
    rock_div.addEventListener("click", function () {
      game("r");
    });
  }

  if (paper_div) {
    paper_div.addEventListener("click", function () {
      game("p");
    });
  }

  if (scissor_div) {
    scissor_div.addEventListener("click", function () {
      game("s");
    });
  }
}

main();
