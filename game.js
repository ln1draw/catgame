var house = [
  {
    id: 0,
    room: 'living room',
    up: null,
    left: null,
    right: 1,
    down: null
  },

  {
    id: 1,
    room: 'kitchen',
    up: null,
    left: 0,
    right: 3,
    down: 2
  },

  {
    id: 2,
    room: 'downstairs bathroom',
    up: 1,
    left: null,
    right: null,
    down: null
  },

  {
    id: 3,
    room: 'dining room',
    up: null,
    left: 1,
    right: null,
    down: 4
  },

  {
    id: 4,
    room: 'stairwell',
    up: 3,
    left: null,
    right: null,
    down: null
  }
];

var player = {
  position: 0
};

function movePlayer(roomIndex) {
  player.position = roomIndex;
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

function drawCanvas() {
  var canvas = document.getElementById('house');

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.font = '16px serif';

    ctx.strokeRect(200, 100, 125, 125);
    ctx.strokeRect(325, 100, 125, 125);
    ctx.strokeRect(450, 100, 125, 125);
    ctx.strokeRect(360, 225, 50, 50);
    ctx.strokeRect(500, 225, 75, 50);

    ctx.fillText("Living Room", 220, 90);
    ctx.fillText("Kitchen", 355, 90);
    ctx.fillText("Dining Room", 470, 90);
    ctx.fillText("Half Bath", 355, 295);
    ctx.fillText("Stairwell", 505, 295);


    ctx.fillRect(255, 160, 10, 10);
  } else {
    // canvas-unsupported code here
  }
}

$(document).ready(function () {

  drawCanvas();

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