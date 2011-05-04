var connect = require('connect');
var nowjs = require('now');

var server = connect.createServer(
    connect.favicon()
  , connect.logger()
  , connect.staticProvider(__dirname + '/public')
);

server.listen(8000);

var mensagens = new Array(10);

var chat = nowjs.initialize(server);

chat.connected(function () {
  var self = this;
  console.log('entrou o usuario');
  mensagens.forEach(function (msg) {
    console.log(msg);
    self.now.receberMensagem(msg.hora, msg.nome, msg.texto);
  });
});

chat.now.enviarMensagem = function(mensagem) {
  var msg = {
    hora: new Date().toLocaleTimeString(),
    nome: this.now.nome,
    texto: mensagem
  };
   
  mensagens.push(msg);
  console.log(msg);

  chat.now.receberMensagem(msg.hora, msg.nome, msg.texto);
};
