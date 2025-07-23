const nextDraw = document.querySelector(".next-draw");

const GetNextDrawDate = function () {
  const currentDate = new Date();
  if (currentDate.getDate() === 1) {
    nextDraw.textContent = "Today!! Good Luck🤞";
  } else {
    const currentDate = new Date();
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const nextMonthName = nextMonthDate.toLocaleString("default", {
      month: "long",
    });
    nextDraw.textContent = `: 1st ${nextMonthName} ${currentDate.getFullYear()}`;
  }
};

GetNextDrawDate();
