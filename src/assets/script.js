const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();

  const draggingItem = sortableList.querySelector(".dragging");

  // Getting all items expect currently dragging and making array of them
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // Finding the sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Inserting the dragging item before the found sibling
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
