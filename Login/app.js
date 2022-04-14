const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const goToLink = document.querySelector("#link");
const user = loginInput.value;
const USERNAME_KEY = localStorage.setItem("username", user);
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  if (username != "hyukskee") {
    alert("아이디 틀렸다");
  } else {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    goToLink.classList.remove(HIDDEN_CLASSNAME);
  }
}

function paintGreetings() {
  const username = localStorage.getItem(user);
}
/* loginInput.addEventListener("keypress", (e) => {
  const userInfo = e.target.value;
  console.log(e.key);
  console.log(userInfo);
}); */

loginForm.addEventListener("submit", onLoginSubmit);
