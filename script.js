let uniqeId = 0;

function addChore() {
  uniqeId = uniqeId + 1;

  const inputElement = document.getElementById("input");
  let chore = inputElement.value;
  inputElement.value = "";
  const choreItem = document.createElement("li");
  const removeButton = document.createElement("button");
  choreItem.id = "li" + uniqeId;
  removeButton.id = "button" + uniqeId;
  const choreText = document.createTextNode(chore);
  choreItem.appendChild(choreText);
  const choreListElement = document.getElementById("choreList");
  choreListElement.appendChild(choreItem);
  choreListElement.appendChild(removeButton);
  removeButton.addEventListener("click", removeButton1);
  function removeButton1() {
    choreItem.remove();
    removeButton.remove();
    console.log(removeButton);
  }
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
}
window.addEventListener("load", loadHandler);
