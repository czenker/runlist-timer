var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var timer = require('./lib/timer.js');

var Timer = timer();

var port = 3000;

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});
app.get('/client_timer.js', function(req, res){
	res.sendfile('public/client_timer.js');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.emit('display', Timer.displayData());

	socket.on('new timer', function(data) {
		console.log('set timer to ' + data);
		io.emit('new timer', data);
	})
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});