let canvas, canvasContext;

let p1Car = new carClass();
let p2Car = new carClass();

window.onload = () => {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  colorRect(0, 0, canvas.clientWidth, canvas.height, "black");
  colorText("Loading", canvas.width / 2, canvas.height / 2, "white");

  loadImages();
};

let imageLoadingDone = () => {
  let fps = 30;
  setInterval(updateAll, 1000 / fps);

  setupInput();
  loadLevel(levelOne);
};

let loadLevel = (whichlevel) => {
  trackGrid = whichlevel.slice();
  p1Car.reset(carPic, "Mclaren");
  p2Car.reset(carPic2, "Redbull");
};

let updateAll = () => {
  moveAll();
  drawAll();
};

let moveAll = () => {
  p1Car.move();
  p2Car.move();
};

let drawAll = () => {
  drawTracks();
  p1Car.draw();
  p2Car.draw();
};
