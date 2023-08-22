const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

let mouseX = 0;
let mouseY = 0;

let setupInput = () => {
  canvas.addEventListener("mousemove", updateMousePos);

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  p1Car.setupInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW
  );
  p2Car.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
};

let updateMousePos = (evt) => {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
};

let keySet = (keyEvent, car, setTo) => {
  if (keyEvent.keyCode == car.controlLeft) {
    car.keyHeld_Left = setTo;
  }
  if (keyEvent.keyCode == car.controlRight) {
    car.keyHeld_Right = setTo;
  }
  if (keyEvent.keyCode == car.controlUp) {
    car.keyHeld_Gas = setTo;
  }
  if (keyEvent.keyCode == car.controlDown) {
    car.keyHeld_Reverse = setTo;
  }
};

let keyPressed = (evt) => {
  keySet(evt, p1Car, true);
  keySet(evt, p2Car, true);
};

let keyReleased = (evt) => {
  keySet(evt, p1Car, false);
  keySet(evt, p2Car, false);
};
