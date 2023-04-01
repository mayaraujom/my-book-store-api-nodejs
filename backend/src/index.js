const app = require('./app');

// não remova a variável `API_PORT` ou o `listen`
const port = 3000;
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
