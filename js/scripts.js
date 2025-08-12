const nextDraw = document.querySelector(".next-draw");
const randomWelcome = document.querySelector(".random-welcome");

const GetNextDrawDate = function () {
  const currentDate = new Date();
  if (currentDate.getDate() === 1) {
    nextDraw.textContent = " Today!! Good Luck🤞";
  } else {
    const currentDate = new Date();
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const nextMonthName = nextMonthDate.toLocaleString("default", {
      month: "long",
    });
    nextDraw.textContent = `: 01 ${nextMonthName} ${currentDate.getFullYear()}`;
  }
};

const GenRandomWelcome = function () {
  const randomIndex = Math.floor(Math.random() * welcomeList.length);
  randomWelcome.textContent = welcomeList[randomIndex];
};

const welcomeList = [
  "Ciao! You found my corner of the web.",
  "Hi, Welcome to my hub.",
  "Hey there! Glad you dropped by.",
  "Welcome to my digital hub.",
];

GenRandomWelcome();
GetNextDrawDate();
