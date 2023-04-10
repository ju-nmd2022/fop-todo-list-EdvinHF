function addChore() {
  const inputElement = document.getElementById("input");
  const chore = inputElement.value;
  console.log(chore);
  const choreItem = document.createElement("li");
  const choreText = document.createTextNode(chore);
  choreItem.appendChild(choreText);
  const choreListElement = document.getElementById("choreList");
  choreListElement.appendChild(choreItem);
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
}
window.addEventListener("load", loadHandler);
