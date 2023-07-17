import { User } from "./users.js";
const loggedUser = localStorage.getItem("loggedUser");
const currentUser = JSON.parse(loggedUser);
const userName = document.querySelector(".user-name");
userName.textContent = `Olá, ${currentUser.name} !`;

const startWorkingBtn = document.querySelector(".start-working");
startWorkingBtn.addEventListener("click", startWorking);

function startWorking() {
  const buttonDiv = document.querySelector(".button");
  buttonDiv.innerHTML = `Good Job! 
  You started working!`;
}

document.querySelector(".exit").addEventListener("click", function () {
  window.location.href = "../index.html";
});

function validate(email, password) {
  const loggedUser = users.find(
    (user) => user.email === email && user.password === password
  );
  return loggedUser || null;
}
