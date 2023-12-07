// Seleciona o formulário usando seu ID
var cadastro = document.getElementById('cad');

// Define o atributo 'action'
cadastro.action = 'http://127.0.0.1:5500/enviar_cad';

// Define o atributo 'method'
cadastro.method = 'POST';
