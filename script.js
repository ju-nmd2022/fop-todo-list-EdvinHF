let uniqeId = 0;
function removeButton1() {
  choreItem.remove();
  removeButton.remove();
}
function addChore() {
  uniqeId = uniqeId + 1;

  const inputElement = document.getElementById("input");
  let chore = inputElement.value;
  inputElement.value = "";
  const choreItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const doneButton = document.createElement("button");
  doneButton.id = "done" + uniqeId;
  choreItem.id = "li" + uniqeId;
  removeButton.id = "button" + uniqeId;
  const choreText = document.createTextNode(chore);
  choreItem.appendChild(choreText);
  const choreListElement = document.getElementById("choreList");
  choreListElement.appendChild(choreItem);
  choreListElement.appendChild(removeButton);
  choreListElement.appendChild(doneButton);
  removeButton.addEventListener("click", removeButton1);
  function removeButton1() {
    choreItem.remove();
    removeButton.remove();
    doneButton.remove();
  }
  doneButton.addEventListener("click", doneButton1);
  function doneButton1() {
    doneButton.remove();
    choreItem.style.textDecoration = "line-through";
  }
  if (inputElement.value > 1) {
    console.log("hi");
  }
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
}
window.addEventListener("load", loadHandler);
