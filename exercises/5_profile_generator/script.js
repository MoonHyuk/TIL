const draw = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  const cols = parseInt(document.getElementsByName("cols")[0].value);
  const rows = parseInt(document.getElementsByName("rows")[0].value);

  container.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";

  for (let i = 0; i < cols * rows; i++) {
    const item = document.createElement("div");
    item.classList.add("item");

    container.appendChild(item);
  }

  const ratio = 0.5;

  const color =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";

  const items = document.getElementsByClassName("item");

  for (let col = 0; col < cols / 2; col++) {
    for (let row = 0; row < rows; row++) {
      if (Math.random() < ratio) {
        items[row * cols + col].style.backgroundColor = color;
        items[row * cols + cols - col - 1].style.backgroundColor = color;
      }
    }
  }
};

draw();
