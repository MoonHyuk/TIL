let tileSize = 20;
const minTileSize = 4;
const maxTileSize = 30;

const img = document.getElementById("image");
const canvas = document.createElement("canvas");

const mosaic = (size) => {
  const radius = size / 2;
  const mosaic = document.getElementById("mosaic");
  mosaic.width = canvas.width;
  mosaic.height = canvas.height;

  const cols = parseInt(canvas.width / size);
  const rows = parseInt(canvas.height / size);

  const canvasCtx = canvas.getContext("2d");
  const mosaicCtx = mosaic.getContext("2d");

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const pixel = canvasCtx.getImageData(x * size, y * size, 1, 1).data;

      mosaicCtx.fillStyle = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]}`;
      mosaicCtx.beginPath();
      mosaicCtx.ellipse(
        x * size + radius,
        y * size + radius,
        radius,
        radius,
        0,
        0,
        2 * Math.PI
      );
      mosaicCtx.fill();
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
