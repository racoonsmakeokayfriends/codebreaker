$(document).ready(function() {
  

  var NUM_PEGS = 5;
  var NUM_TURNS = 10;
  var turns_left = NUM_TURNS;

  var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff'];
  var ANSWER = [];

  var empty_row = '<div class="row active"><div class="info"><div class="num"></div><div class="key submit"></div></div><div class="pegs"></div></div>';



  function generate_answer() {
    for (var i=0;i<NUM_PEGS;i++) {
      ANSWER.push(Math.floor(Math.random() * colors.length));
    }
  }

  function check_answer(attempt) {
    // only does black lines for now
    key = [];
    for (var i=0;i<NUM_PEGS;i++) {
      if (ANSWER[i] == attempt[i]) {
        key.push(1);
      }
      else {
        key.push(0);
      }
    }

    // todo: white lines
    // todo: if key = [1,1,1,1,1....] -> game won
    return key;
  }

  function get_attempt() {
    // todo read the active row to get what their attempt is
  }

  function init_game() {
    /*
      // setup first row
      var p = $('<div class="peg"></div>');
      for (var i=0; i< NUM_PEGS; i++) {
        $('.row.active .pegs').append(p.clone().attr('val',i));
      }

      $('.row.active .pegs .peg').attr('color',0);

      // setup the info panel
      $('.row.active .info .num').text(turns_left);
    */

    new_row();
    generate_answer();
  }

  function end_game() {
    alert('gameover');
  }
  
  function set_color($peg,color) {
    $peg.attr('color',color);
    $peg.css('background-color',colors[color]);
  }

  function set_key(key) {
    var $k = $('.row.active .key');
    var hint = $('<div class="hint"></div>');
    for (var i=0; i<NUM_PEGS; i++) {
      if (key[i] == 0) {
        hint.addClass('clear');
        hint.removeClass('black');
      }
      else if (key[i] == 1) {
        hint.addClass('black');
        hint.removeClass('clear');
      }
      $k.append(hint.clone());
    }
  }

  function new_row(){
    $('.container').append(empty_row);

    var p = $('<div class="peg"></div>');
    for (var i=0; i< NUM_PEGS; i++) {
      $('.row.active .pegs').append(p.clone().attr('val',i));
    }

    $('.row.active .pegs .peg').attr('color',0);

    // setup the info panel
    $('.row.active .info .num').text(turns_left);
  }

  // rotate the color on click
  $(document).on('click','.row.active .pegs .peg',function() {
    var c = parseInt($(this).attr('color'));
    c += 1;
    if (c==NUM_PEGS) {      c = 0;    }
    set_color($(this),c);
  });

  // submit
  $(document).on('click','.row.active .key.submit',function() {
    // inactivate row
    // calculate the key
    // get new row
    // set kwey
    turns_left -= 1;

    if (turns_left == 0) {
      end_game();
      return;
    }
    $('.row.active').toggleClass('active inactive');
    new_row();

  });
  
  init_game();
  
  
});

