let uniqeId = 0;

function addChore() {
  uniqeId = uniqeId + 1;

  const inputElement = document.getElementById("input");
  let chore = inputElement.value;
  inputElement.value = "";
  if (chore !== "") {
    const choreItem = document.createElement("li");
    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const choreText = document.createTextNode(chore);
    doneButton.id = "done" + uniqeId;
    choreItem.id = "li" + uniqeId;
    removeButton.id = "button" + uniqeId;
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
  }
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
}
window.addEventListener("load", loadHandler);
