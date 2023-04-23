function addChore() {
  const inputElement = document.getElementById("input");
  const chore = inputElement.value;
  inputElement.value = "";

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

    removeButton.addEventListener("click", removeButtonEvent);
    function removeButtonEvent() {
      choreItem.remove();
      removeButton.remove();
      doneButton.remove();
      choreContainer.remove();
      updateList();
    }

    doneButton.addEventListener("click", doneButtonEvent);
    function doneButtonEvent() {
      doneButton.remove();
      choreItem.style.textDecoration = "line-through";
    }

    updateList();
  }
}

function updateList() {
  const chores = [];
  const choreItems = document.querySelectorAll(".choreContainer li");
  for (let i = 0; i < choreItems.length; i++) {
    const chore = choreItems[i].innerHTML;
    chores.push(chore);
  }
  localStorage.setItem("chores", JSON.stringify(chores));
}

function loadList() {
  const choreListElement = document.getElementById("choreList");
  const chores = JSON.parse(localStorage.getItem("chores")) || [];

  for (let i = 0; i < chores.length; i++) {
    const chore = chores[i];
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

    removeButton.addEventListener("click", removeButtonEvent);
    function removeButtonEvent() {
      choreItem.remove();
      removeButton.remove();
      doneButton.remove();
      choreContainer.remove();
      updateList();
    }

    doneButton.addEventListener("click", doneButtonEvent);
    function doneButtonEvent() {
      doneButton.remove();
      choreItem.style.textDecoration = "line-through";
    }
  }
}
function loadHandler() {
  const button = document.getElementById("button");
  button.addEventListener("click", addChore);
  loadList();
}
window.addEventListener("load", loadHandler);
