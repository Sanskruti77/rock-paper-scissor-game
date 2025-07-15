let userscore = 0;
let compscore = 0;
let roundPlayed = 0;
let totalRound = 5;

let choises = document.querySelectorAll(".choise");
let ScoreOfUser = document.querySelector("#user-score");
let ScoreOfComp = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let startBtn = document.querySelector("#start-btn");
let gameScreen = document.querySelector(".gamescreen");
let startScreen = document.querySelector(".start-screen");

startBtn.addEventListener("click", () => {
  gameScreen.style.display = "block";
  startScreen.style.display = "none";
});

const showFinalResult = () => {
  if (userscore > compscore) {
    msg.innerText = " Game Over! You Win this Game ";
    msg.style.backgroundColor = "green";
  } else if (userscore < compscore) {
    msg.innerText = " Game Over! You lost this Game ";
    msg.style.backgroundColor = "red";
  } else {
    msg.innerText = " Game Over! Oh-Oh This game is draw ";
    msg.style.backgroundColor = "gray";
  }

  choises.forEach((choise) => {
    choise.disabled = true;
  });
};

const genCompChoise = () => {
  const option = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * 3);
  return option[random];
};

const showWinner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    console.log("Bravo! You Win");
    msg.innerText = ` Bravo! You Win ${userChoise} beats ${compChoise} `;
    userscore++;
    ScoreOfUser.innerText = userscore;
  } else {
    console.log("Ohh! You lose");
    msg.innerText = ` Ohh! You lost ${compChoise} beats ${userChoise} `;
    compscore++;
    ScoreOfComp.innerText = compscore;
  }
};
const playGame = (userChoise) => {
  if (roundPlayed >= totalRound) return;
  //genrate computer choise
  const compChoise = genCompChoise();

  if (userChoise === compChoise) {
    //Game Draw
    console.log("Game is Draw!");
    msg.innerText = " Game is Draw! ";
  } else {
    let userWin = true;
    if (userChoise === "Rock") {
      userWin = compChoise === "Paper" ? false : true;
    } else if (userChoise === "Paper") {
      userWin = compChoise === "Scissor" ? false : true;
    } else {
      userWin = compChoise === "Rock" ? false : true;
    }
    showWinner(userWin, userChoise, compChoise);
  }
  roundPlayed++;
  if (roundPlayed === totalRound) {
    msg.innerText = "Let's see the Winner...";
    msg.style.backgroundColor = "blueviolet";
    setTimeout(showFinalResult, 1500);
  }
};

choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    const userChoise = choise.getAttribute("id");
    playGame(userChoise);
  });
});

btn1.addEventListener("click", () => {
  userscore = 0;
  compscore = 0;
  roundPlayed = 0;
  totalRound = 5;
  ScoreOfUser.innerText = 0;
  ScoreOfComp.innerText = 0;
  msg.innerText = "Play Your Move!";
  msg.style.backgroundColor = "blueviolet";

  choises.forEach((choise) => {
    choise.disabled = false;
  });
});
btn2.addEventListener("click", () => {
  userscore = 0;
  compscore = 0;
  roundPlayed = 0;
  totalRound = 5;
  ScoreOfUser.innerText = 0;
  ScoreOfComp.innerText = 0;
  msg.innerText = "Play Your Move!";
  msg.style.backgroundColor = "blueviolet";

  choises.forEach((choise) => {
    choise.disabled = false;
  });
});
