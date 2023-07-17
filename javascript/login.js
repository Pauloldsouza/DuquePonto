import { User } from "./users.js";
const loginBtn = document.querySelector(".startSection");

const Paulo = new User(
  "Paulo Ricardo",
  "924422848",
  "pauloldsouza09@gmail.com",
  "123456",
  0,
  true,
  1
);

const Elivelton = new User(
  "Elivelton Reis",
  "987654321",
  "elivelton@gmail.com",
  "123456",
  false,
  0,
  2
);

const users = [Elivelton, Paulo];

loginBtn.addEventListener("click", handleLogin);
function handleLogin() {
  const loginInput = document.querySelector("#userLogin").value;
  const userPassword = document.querySelector("#userPassword").value;

  const findUser = (email) => {
    return users.find((user) => user.email === email) || null;
  };

  const userExists = findUser(loginInput);

  if (userExists) {
    if (userExists.password === userPassword) {
      var user = userExists;
      const userJson = JSON.stringify(user);
      localStorage.setItem("loggedUser", userJson);
      window.location.href = "./html/homepage.html";
    } else {
      alert("senha incorreta");
    }
  } else {
    alert("deu ruim");
  }

  document.querySelector("#userLogin").value = "";
  document.querySelector("#userPassword").value = "";
}

const olhinho = document.querySelector("#olhinho");
const userPassword = document.getElementById("userPassword");
olhinho.addEventListener("click", function () {
  olhinho.classList.toggle("verde");
  if (userPassword.type === "password") {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
});
