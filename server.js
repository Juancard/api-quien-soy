var http = require('http');
var path = require('path');

var server = http.createServer(function(req,res){
  if (req.url == "/"){
    console.log(req.headers);
  }
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
