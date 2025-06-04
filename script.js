const items = document.querySelectorAll(".item1, .item2");
let movedUp = false;

function toggleItems() {
  items.forEach((item) => {
    item.style.transform = movedUp ? "translateY(0)" : "translateY(-127%)";
  });
  movedUp = !movedUp;
}

setInterval(toggleItems, 4000);
