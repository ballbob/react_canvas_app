var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

//io listens for a connection and returns a socket
io.on('connection',function(socket){
  //the socket listens for a chat and takes the message
  socket.on('drawClick',(data) => {
    //every time chat is received, send ('emit') the message
    io.sockets.emit('drawClick')
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});