const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const goToLink = document.querySelector("#link");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  if (savedUsername != "hyukskee") {
    event.preventDefault();
    console.log(`null or error`);
  } else {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    goToLink.classList.remove(HIDDEN_CLASSNAME);
  }
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  loginForm.classList.add(HIDDEN_CLASSNAME);
  goToLink.classList.remove(HIDDEN_CLASSNAME);
}

/* function paintGreetings() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  goToLink.classList.remove(HIDDEN_CLASSNAME);
} */
/* loginInput.addEventListener("keypress", (e) => {
  const userInfo = e.target.value;
  console.log(e.key);
  console.log(userInfo);
}); */

/* loginForm.addEventListener("submit", onLoginSubmit); */
