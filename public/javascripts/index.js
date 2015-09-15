
var socket = io.connect('');

socket.on('news', function (data) {
  console.log(data);
});

$('button').on('mousedown touchstart', function() {
  $(document).on('mouseup touchend', function() {
    $(document).off('mouseup touchend');
    socket.emit('stop');
  });
  socket.emit('start');
});


