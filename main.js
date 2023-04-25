import "./style.scss";

import store from "./store";
import { incrementAction, decrementAction } from "./store/counter";
import { addTodo, toggleTodo, removeTodo } from "./store/todos";
function renderCounter() {
  const { counter } = store.getState().counterState;
  document.querySelector("h2 span").innerText = counter;
}

function renderFriends() {
  const { friends } = store.getState().friendsState;
  document.querySelector("ul").innerHTML = friends
    .map(({ name }) => `<li>${name}</li>`)
    .join("");
}

function renderTodos() {
  const { todos } = store.getState().todosState;
  document.querySelector("ul:last-child").innerHTML = todos
    .map(
      ({ name, id, checked }) => `
        <li class="${checked ? "checked" : ""}" data-id="${id}">
            <span>${name}</span>
            <a href="#" class="remove">x</a>
            <a href="#" class="check">☑</a>
        </li>
        `
    )
    .join("");
}

renderCounter();
renderFriends();
renderTodos();

store.subscribe(renderCounter);
store.subscribe(renderFriends);
store.subscribe(renderTodos);

document.querySelectorAll("button")[0].onclick = function () {
  store.dispatch(incrementAction);
};

document.querySelectorAll("button")[1].onclick = function () {
  store.dispatch(decrementAction);
};

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(addTodo(document.querySelector("input").value));
  document.querySelector("input").value = "";
};

document.querySelector("ul:last-child").onclick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("remove")) {
    store.dispatch(removeTodo(e.target.parentElement.dataset.id));
  }
  if (e.target.classList.contains("check")) {
    store.dispatch(toggleTodo(e.target.parentElement.dataset.id));
  }
};
