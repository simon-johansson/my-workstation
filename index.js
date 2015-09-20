
var app = require('./app');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var debug = require('debug')('express:server');

var api = require('littlebits-cloud-http')
          .defaults({
            access_token: '23ead4f1c1aa380cb1903f98a94e1c2b7dd1fda870997a387c376d17077ff120',
            device_id: '00e04c1f0966',
            duration_ms: -1
          });

var port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, function () {
  console.log('Listening on port: ' + port);
});

io.on('connection', function (socket) {

  api.device({device_id: '00e04c1f0966'}, function (err, data) {
    // console.log(data);
    socket.emit('is_online', data.is_connected);
    // socket.emit('is_online', true);
  });

  socket.on('start', function (data) {
    // console.log('start');
    api.output({percent: '100'});
  });

  socket.on('stop', function (data) {
    // console.log('stop');
    api.output({percent: '0'});
  });
});

// var output = api.output.defaults({device_id: '00e04c1f0966', percent: 100, duration_ms: -1 })
// api.output({device_id: '00e04c1f0966', percent: '0', duration_ms: -1 })
// api.output({device_id: '00e04c1f0966', percent: '100', duration_ms: -1 })

// api.output({percent: '100'});
// api.output({percent: '0'});

// Ping devices för att se om man är på kontoret
//
