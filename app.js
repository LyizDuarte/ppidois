const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

app.post('/formulario', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.send('Preencha todos os campos.');
  }

  res.redirect(`/confirmacao?nome=${nome}&email=${email}`);
});

app.get('/confirmacao', (req, res) => {
  const { nome, email } = req.query;
  res.send(`Dados recebidos:<br>Nome: ${nome}<br>E-mail: ${email}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
