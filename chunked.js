var http = require('http');
var server = http.createServer(function (req, res) {
  var chunkInterval = setInterval(function () {
    res.write('Resposta Chunked\n');
  }, 100);

  setTimeout(function () {
    clearInterval(chunkInterval);
    res.end('Fim\n');
  }, 10000);
  
});

server.listen(8080, "127.0.0.1");

