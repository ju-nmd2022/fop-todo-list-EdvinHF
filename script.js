function addChore() {
  const inputElement = document.getElementById("input");
  const chore = inputElement.value;
  inputElement.value = "";
  localStorage.chore = inputElement.value;
  if (chore !== "") {
    const choreListElement = document.getElementById("choreList");
    const choreItem = document.createElement("li");
    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const choreContainer = document.createElement("div");
    choreContainer.classList.add("choreContainer");
    removeButton.classList.add("remove");
    doneButton.classList.add("done");
    choreItem.innerHTML = chore;
    choreListElement.appendChild(choreContainer);
    choreContainer.appendChild(choreItem);
    choreContainer.appendChild(removeButton);
    choreContainer.appendChild(doneButton);
    removeButton.addEventListener("click", removeButton1);
    function removeButton1() {
      choreItem.remove();
      removeButton.remove();
      doneButton.remove();
      choreContainer.remove();
    }
    doneButton.addEventListener("click", doneButton1);
    function doneButton1() {
      doneButton.remove();
      choreItem.style.textDecoration = "line-through";
    }
  }
}
function storeList() {}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
  storeList();
}
window.addEventListener("load", loadHandler);
