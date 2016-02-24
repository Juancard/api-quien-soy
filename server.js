var http = require('http');
var api = require("./api/quienSoy.js");
var server = http.createServer(function(req,res){
  res.writeHead(
    200, 
    {"content-type": "application/json"}
  );
  api(req,res);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
