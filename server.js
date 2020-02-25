var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/pages/landing.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

// Emit welcome message on connection
io.on('connection', function(socket) {
  console.log("User connected.");
  socket.emit("msg", "Hello client!");

  socket.on('msg', function(data){
    console.log(data);
  });
});

app.listen(7000);
