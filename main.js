import store from "./store";
import { incrementAction, decrementAction } from "./store/counter";
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

renderCounter();
renderFriends();

store.subscribe(renderCounter);
store.subscribe(renderFriends);

document.querySelectorAll("button")[0].onclick = function () {
  store.dispatch(incrementAction);
};

document.querySelectorAll("button")[1].onclick = function () {
  store.dispatch(decrementAction);
};
