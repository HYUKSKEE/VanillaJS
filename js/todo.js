const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#toDoList");
const toDos = [];

function saveToDos() {
  localStorage.setItem("list", JSON.stringify(toDos));
}

function deleteList(event) {
  const target = event.target.parentElement;
  target.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteList);
  button.innerText = "❌";
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
  toDos.push(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoForm);

/* const savedToDosList = localStorage.getItem("list");
if (savedToDos === null) {
  alert("저장된 list가 없습니다.");
} else {
  toDoList.innerText = savedToDos;
} */
