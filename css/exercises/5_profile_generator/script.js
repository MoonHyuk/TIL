var cols = 20;
var rows = 20;
var ratio = 0.5;

var color =
  "rgb(" +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  ")";

var container = document.getElementsByClassName("container")[0];
container.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
container.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";

for (var i = 0; i < cols * rows; i++) {
  var item = document.createElement("div");
  item.classList.add("item");

  if (Math.random() < ratio) {
    item.style.backgroundColor = color;
  }

  container.appendChild(item);
}
