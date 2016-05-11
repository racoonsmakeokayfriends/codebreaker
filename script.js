$(document).ready(function() {
  
  var NUM_PEGS = 5;
  var NUM_TURNS = 10;
  
  function init_game() {
    // setup first row
    $peg = $('.peg');
    for (var i=0; i< NUM_PEGS; i++) {
      $peg.attr('val',i.toString());
      $('.row.active .pegs').append($peg);
    }
    console.log($peg);
  }
  
  init_game();
  
  
});

