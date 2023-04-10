function addChore() {
  const inputElement = document.getElementById("input");
  const chore = inputElement.value;
  const choreListElement = document.getElementById("choreList");
  choreListElement.innerText = chore;
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
}
window.addEventListener("load", loadHandler);
