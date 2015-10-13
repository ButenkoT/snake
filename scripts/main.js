var grid = {
  width: 40,
  height: 40
};

function renderGrid(ourGrid){
  for (var i = 1; i < ourGrid.width * ourGrid.height; i++){
    var j = i % 40;
    var $newCell = $('<div></div>');
    $newCell.addClass("gridCell");
    $(".gridContainer").append($newCell);
  }
}



$(document).ready(function(){
  renderGrid(grid);
});