// add code in class!
const inputElement = document.getElementById("item-name");
const addItemButton = document.getElementById("add-item");
const deleteLastItemButton = document.getElementById("delete-last-item");
const shoppingList = document.getElementById("shopping-list");

addItemButton.addEventListener("click", function () {
  // 1. Get the value from the input
  const inputValue = inputElement.value;
  if (inputElement.value !== "") {
    // 2. Create an <li></li>
    const newListItem = document.createElement("li");
    // This can avoid step 3 and 4, but is messy and risky
    // newListItem.innerHTML = inputValue;
    // 3. Create a new text node
    const newTextNode = document.createTextNode(inputValue);
    // 4. Insert the text node into the <li>
    newListItem.appendChild(newTextNode);
    // 5. Insert the complete <li>, to tue <ul>
    shoppingList.appendChild(newListItem);
  } else {
    alert("No item to add!");
  }
});

deleteLastItemButton.addEventListener("click", function () {
  // 1. Get last child of the <ul>
  const lastItemInList = shoppingList.lastElementChild;

  if (shoppingList.children.length > 0) {
    // 2. Remove Last child of <ul>
    shoppingList.removeChild(lastItemInList);
  } else {
    alert("No more Items in the list");
  }
});
