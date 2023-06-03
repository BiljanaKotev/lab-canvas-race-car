window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    let carY = 500;
    let carX = 225;

    function updateCar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background, 0, 0, 500, 700);
      carY -= 2;
      ctx.drawImage(car, 225, carY, 50, 100);
      requestAnimationFrame(updateCar);
    }

    function moveUp() {
      carY.y -= 25;
    }
    function moveDown() {
      carY.y += 25;
    }
    function moveLeft() {
      carX.x -= 25;
    }
    function moveRight() {
      carX.x += 25;
    }
    updateCar();
  }
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const background = new Image();
  background.src = "./images/road.png";
  background.onload = function () {
    ctx.drawImage(background, 0, 0, 500, 700);
  };

  const car = new Image();
  car.src = "./images/car.png";
  car.onload = function () {
    ctx.drawImage(car, 225, 500, 50, 100);
  };
};
