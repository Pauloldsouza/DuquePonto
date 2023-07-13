import users from "./users.js";
const loginBtn = document.querySelector(".startSection");

loginBtn.addEventListener("click", handleLogin);

function handleLogin() {
  const loginInput = document.querySelector("#userLogin").value;
  const userPassword = document.querySelector("#userPassword").value;
  users.forEach((user) => {
    if (loginInput === user.email && userPassword === user.password) {
      alert(`Login de ${user.name} efetuado com sucesso!`);
    } else {
      alert("teste ok, usuário não é Paulo");
    }
  });
}
