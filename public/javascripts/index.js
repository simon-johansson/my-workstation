
var socket = io.connect('');
var $doc = $(document);
var $bell = $('.bell');
var $mouth = $('.mouth');

socket.on('is_online', function (isOnline) {
  var text, className;
  if (isOnline) {
    text = 'is online';
    className = 'green';
  } else {
    text = 'is offline';
    className = 'red';
    $mouth.removeClass('hidden');
    $bell.off('mousedown touchstart');
  }
  $('h2').html(text).addClass(className);
});

$bell.on('mousedown touchstart', function() {
  console.log('mousedown');
  $bell.addClass('active');
  $doc.on('mouseup touchend', function() {
    $bell.removeClass('active');
    $doc.off('mouseup touchend');
    socket.emit('stop');
  });
  socket.emit('start');
});


