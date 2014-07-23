var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ServerTimer = require('./lib/server/main.js');

var server_timer = ServerTimer();

var port = 3000;

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

app.get('/client/main.js', function(req, res){res.sendfile('lib/client/main.js')});
app.get('/client/clock.js', function(req, res){res.sendfile('lib/client/views/clock.js')});
app.get('/client/timer.js', function(req, res){res.sendfile('lib/client/views/timer.js')});

io.on('connection', function(socket){
	// a user connected - let him know what he is supposed to show
	console.log('a user connected');
	socket.emit('display', server_timer.getData());

	// event: new timer should be displayed
	socket.on('timer', function(data) {
		server_timer.displayTimer(data);
		io.emit('display', server_timer.getData());
	});

	// event: clock should be displayed
	socket.on('clock', function(data) {
		server_timer.displayClock(data);
		io.emit('display', server_timer.getData());
	});
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});