var count_one = 0;
var count_two = 0;

$('#cat-one').click(function(e) {
  count_one += 1;
  $('#one-display').val(count_one);
});

$('#cat-two').click(function(e) {
  count_two += 1;
  $('#two-display').val(count_two);
});
