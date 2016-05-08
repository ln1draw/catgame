var canvas, ctx;
var house = [
  {
    id: 0,
    room: 'living room',
    up: null,
    left: null,
    right: 1,
    down: null,
    playerX: 255,
    playerY: 160
  },

  {
    id: 1,
    room: 'kitchen',
    up: null,
    left: 0,
    right: 3,
    down: 2,
    playerX: 380,
    playerY: 160
  },

  {
    id: 2,
    room: 'downstairs bathroom',
    up: 1,
    left: null,
    right: null,
    down: null,
    playerX: 382,
    playerY: 245
  },

  {
    id: 3,
    room: 'dining room',
    up: null,
    left: 1,
    right: null,
    down: 4,
    playerX: 505,
    playerY: 160
  },

  {
    id: 4,
    room: 'stairwell',
    up: 3,
    left: null,
    right: null,
    down: null,
    playerX: 530,
    playerY: 245
  }
];

var player = {
  position: 0,
  x: 255,
  y: 160
};

function movePlayer(roomIndex) {
  player.position = roomIndex;
  ctx.clearRect(player.x, player.y, 10, 10);
  player.x = house[player.position].playerX;
  player.y = house[player.position].playerY;

  ctx.fillRect(player.x, player.y, 10, 10);
  console.log('player has moved to ' + house[player.position].room);
}

function cantMove() {
  console.log('you can\'t go that way!');
}

function checkPlayerMove(direction, currentRoom) {
  if (currentRoom[direction] !== null) {
    console.log(currentRoom);
    movePlayer(currentRoom[direction]);
  } else {
    cantMove();
  }
}

function initializeCanvas() {
  canvas = document.getElementById('house');

  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    ctx.font = '16px serif';


    // draw outline of map
    ctx.moveTo(500, 225);
    ctx.lineTo(410, 225);
    ctx.lineTo(410, 270);
    ctx.lineTo(365, 270);
    ctx.lineTo(365, 225);
    ctx.lineTo(200, 225);
    ctx.lineTo(200, 100);
    ctx.lineTo(575, 100);
    ctx.lineTo(575, 275);
    ctx.lineTo(500, 275);
    ctx.lineTo(500, 225);

    // add barriers to create distinctive rooms with doorways

    ctx.moveTo(325, 100);
    ctx.lineTo(325, 150);
    ctx.moveTo(325, 225);
    ctx.lineTo(325, 175);

    ctx.moveTo(450, 100);
    ctx.lineTo(450, 150);
    ctx.moveTo(450, 225);
    ctx.lineTo(450, 175);

    ctx.moveTo(410, 225);
    ctx.lineTo(395, 225);
    ctx.moveTo(365, 225);
    ctx.lineTo(380, 225);

    ctx.moveTo(500, 225);
    ctx.lineTo(550, 225);

    ctx.stroke();

    // stairs
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    ctx.moveTo(510, 225);
    ctx.lineTo(510, 275);
    ctx.moveTo(520, 225);
    ctx.lineTo(520, 275);
    ctx.moveTo(530, 225);
    ctx.lineTo(530, 275);
    ctx.moveTo(540, 225);
    ctx.lineTo(540, 275);
    ctx.moveTo(550, 225);
    ctx.lineTo(550, 275);

    ctx.stroke();

    ctx.fillStyle = 'rgb(0, 0, 0)';

    ctx.fillText("Living Room", 220, 90);
    ctx.fillText("Kitchen", 355, 90);
    ctx.fillText("Dining Room", 470, 90);
    ctx.fillText("Half Bath", 355, 295);
    ctx.fillText("Stairwell", 505, 295);

    ctx.save();

    ctx.fillRect(player.x, player.y, 10, 10);
  } else {
    // canvas-unsupported code here
  }
}

$(document).ready(function () {

  initializeCanvas();

  $('.content').keydown(function (e) {
    var currentRoom = house[player.position];
    if (e.keyCode == 37) {
      checkPlayerMove('left', currentRoom);
    } else if (e.keyCode == 38) {
      checkPlayerMove('up', currentRoom);
    } else if (e.keyCode == 39) {
      checkPlayerMove('right', currentRoom);
    } else if (e.keyCode == 40) {
      checkPlayerMove('down', currentRoom);
    }
  });
});