const draw = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  const cols = document.getElementsByName("cols")[0].value;
  const rows = document.getElementsByName("rows")[0].value;
  const ratio = 0.5;

  const color =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";

  container.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";

  for (let i = 0; i < cols * rows; i++) {
    const item = document.createElement("div");
    item.classList.add("item");

    if (Math.random() < ratio) {
      item.style.backgroundColor = color;
    }

    container.appendChild(item);
  }
};

draw();
