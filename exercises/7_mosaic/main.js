let tileSize = 20;
const minTileSize = 4;
const maxTileSize = 30;

const img = document.getElementById("image");
const canvas = document.createElement("canvas");

const mosaic = (size) => {
  const cols = parseInt(canvas.width / size);
  const rows = parseInt(canvas.height / size);

  const container = document.getElementById("container");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${cols}, ${size}px)`;
  container.style.gridTemplateRows = `repeat(${rows}, ${size}px)`;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const pixel = canvas
        .getContext("2d")
        .getImageData(x * size, y * size, 1, 1).data;

      const tile = document.createElement("div");
      tile.style.width = `${size}px`;
      tile.style.height = `${size}px`;
      tile.style.backgroundColor = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})`;
      container.appendChild(tile);
    }
  }
};

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

  mosaic(tileSize);
};

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp" && tileSize < maxTileSize) {
    tileSize++;
  } else if (e.key === "ArrowDown" && tileSize > minTileSize) {
    tileSize--;
  }

  mosaic(tileSize);
});
