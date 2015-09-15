
var app = require('./app');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var debug = require('debug')('express:server');

var port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, function () {
  console.log('Listening on port: ' + port);
});

io.on('connection', function (socket) {

  socket.on('start', function (data) {
    console.log('start');
  });

  socket.on('stop', function (data) {
    console.log('stop');
  });
});

// var api = require('littlebits-cloud-http')
//           .defaults({ access_token: '23ead4f1c1aa380cb1903f98a94e1c2b7dd1fda870997a387c376d17077ff120' })

// var output = api.output.defaults({device_id: '00e04c1f0966', percent: 100, duration_ms: -1 })


// api.output({device_id: '00e04c0362e9', percent: procent, duration_ms: -1 })
