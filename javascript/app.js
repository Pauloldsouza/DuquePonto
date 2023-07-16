import users from "./users.js";
const loggedUser = [];
export function getCurrentUser(user) {
  console.log(user.name);
  loggedUser.pop();
  loggedUser.push(user);
}
