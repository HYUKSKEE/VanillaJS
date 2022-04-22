const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#toDoList");
const LIST_KEY = "list";
let toDos = [];

function saveToDos() {
  localStorage.setItem(LIST_KEY, JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoForm);

const saveToDoList = localStorage.getItem(LIST_KEY);

if (saveToDoList !== null) {
  const parsedToDos = JSON.parse(saveToDoList);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
/* const savedToDosList = localStorage.getItem("list");
if (savedToDos === null) {
  alert("저장된 list가 없습니다.");
} else {
  toDoList.innerText = savedToDos;
} */
