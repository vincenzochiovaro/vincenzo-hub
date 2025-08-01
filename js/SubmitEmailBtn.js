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
    fetch("https://formspree.io/f/xpwlregy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: inputEmail }),
    })
      .then((response) => {
        if (!response.ok) {
          StyleButtonOnFailure("Limit reached today, try again tomorrow");
        }
        return response.json();
      })
      .then((result) => {
        if (result.ok) {
          StyleButtonSuccess();
        }
      })
      .catch((error) => {
        event.preventDefault();
        StyleButtonOnFailure("Limit reached today, try again tomorrow");
      });
  } else {
    const msg = "Insert a Valid Email. Try Again";
    StyleButtonOnFailure(msg);
  }
});

function StyleButtonSuccess() {
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
}

function StyleButtonOnFailure(message) {
  popover._config.content = message;
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

function ValidateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;

  const domain = email.split("@")[1].toLowerCase();
  const validTlds = [".com", ".it", ".org", ".net", ".co.uk", ".io", ".edu"];
  if (!validTlds.some((tld) => domain.endsWith(tld))) return false;

  return true;
}
