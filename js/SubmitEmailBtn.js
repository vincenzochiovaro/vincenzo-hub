const submitBookBtn = document.querySelector(".submit-book");
const form = document.querySelector("form");

const popover = new bootstrap.Popover(submitBookBtn, {
  trigger: "manual",
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

submitBookBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const inputEmail = document.querySelector(".input-enter-email").value;

  if (ValidateEmail(inputEmail)) {
    submitBookBtn.disabled = true;
    submitBookBtn.textContent = " Good Luck ✅";

    submitBookBtn.style.backgroundColor = "transparent";
    submitBookBtn.style.color = "green";
    submitBookBtn.style.border = "none";
    submitBookBtn.style.transition = "all 0.9s ease";
    submitBookBtn.style.transform = "scale(1.19)";
    popover.hide();
    document.querySelector(".input-enter-email").disabled = true;
    document.querySelector(".input-enter-email").value = "";
    // send email to my mailbox EMAILJS
    console.log("if");
  } else {
    console.log("else");
    popover._config.content = "Insert a Valid Email. Try Again";
    popover.setContent && popover.setContent();
    popover.show();

    submitBookBtn.style.color = "red";

    document.querySelector(".input-enter-email").value = "";
    document.querySelector(".input-enter-email").disabled = true;

    setTimeout(() => {
      popover.hide();
      submitBookBtn.style.color = "white";
      document.querySelector(".input-enter-email").value = "";
      document.querySelector(".input-enter-email").disabled = false;
    }, 1500);
  }
});

function ValidateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;

  const domain = email.split("@")[1].toLowerCase();
  const validTlds = [".com", ".it", ".org", ".net", ".co.uk", ".io", ".edu"];
  if (!validTlds.some((tld) => domain.endsWith(tld))) return false;

  return true;
}
