var grid = {
  width: 40,
  height: 40
};

var snake = [],
  fruit = [];

//####################### SETTING GRID ###############################

function renderGrid(ourGrid){
  for (var i = 0; i < ourGrid.width * ourGrid.height; i++){
    var $newCell = $('<div></div>');
    $newCell.addClass("gridCell");
    $(".gridContainer").append($newCell);
  }
}

function setCoordinates(){
  $(".gridContainer").find('.gridCell').each( function (index, cell){
    var $cell = $(cell),
      number = getNumber($cell),
      coordinates = getCoordinates(number);

    $cell.attr("x", coordinates[0]);
    $cell.attr("y", coordinates[1]);// coordinate stored as a string!!!

  })
}

function getNumber($cell) {
  return $cell.prevAll('.gridCell').length;
}

function getCoordinates(number) {
  var x = number % grid.width;
  var y = Math.floor(number / grid.height);
  return [x, y];
}

function createGrid(){
  renderGrid(grid);
  setCoordinates();
}

//####################### SETTING SNAKE ###############################

function setRandomCoordinates(){
  var x = Math.floor(Math.random() * 40);
  var y = Math.floor(Math.random() * 40);
  return [x, y];
}

function setSnake(number){
  snake.push(setRandomCoordinates());
  for(var i = 1; i < number; i++){
    snake.push([snake[0][0] + i, snake[0][1]]);
  }
  return snake;
}

function setColors(){
  $(".gridContainer").find('.gridCell').each( function (index, cell){
    var $cell = $(cell);
    var x = parseInt($cell.attr("x"));
    var y = parseInt($cell.attr("y"));
    var coordinates = [x, y];

    for (var i = 0; i < snake.length; i++){
      if(ifSnake(coordinates, i)){
        $cell.css('background-color', 'red');
      }
    }

    if(ifFruit(coordinates)){
      $cell.css('background-color', 'blue');
    }
  })
}

function ifSnake(coordinates, i){
  return coordinates[0] === snake[i][0] && coordinates[1] === snake[i][1];
}

function createSnake(){
  setSnake(5);
}


//####################### SETTING FRUIT ###############################

function createFruit(){
  fruit = setRandomCoordinates();
  setColors();
}

function ifFruit(coordinates){
  return coordinates[0] === fruit[0] && coordinates[1] === fruit[1];
}


$(document).ready(function(){
  createGrid();
  createSnake();
  createFruit();
});