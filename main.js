import "./style.scss";

import store from "./store";
import { incrementAction, decrementAction } from "./store/counter";
import { addTodo, toggleTodo, removeTodo } from "./store/todos";
import { searchCocktails } from "./store/cocktails";
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
  document.querySelector("ul:last-of-type").innerHTML = todos
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

document.querySelector("ul:last-of-type").onclick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("remove")) {
    store.dispatch(removeTodo(e.target.parentElement.dataset.id));
  }
  if (e.target.classList.contains("check")) {
    store.dispatch(toggleTodo(e.target.parentElement.dataset.id));
  }
};

function renderCocktails() {
  const { loading, cocktails, searchValue } = store.getState().cocktailsState;
  document.querySelector(".loading").style.display = loading ? "block" : "none";
  if (cocktails.length > 0) {
    document.querySelector("section").innerHTML = cocktails
      .map(
        ({ strDrink, strDrinkThumb, idDrink }) => `
        <aside>
            <img src="${strDrinkThumb}" alt="${strDrink}" />
            <p>${strDrink} (${idDrink})</p>
        </aside>    
    `
      )
      .join("");
  }
}

renderCocktails();
store.subscribe(renderCocktails);

document.querySelector("form:last-of-type").onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(
    searchCocktails(document.querySelector("form:last-of-type input").value)
  );
  document.querySelector("form:last-of-type input").value = "";
};
