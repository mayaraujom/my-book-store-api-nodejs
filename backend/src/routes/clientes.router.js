const express = require('express');
const clienteController = require('../controllers/cliente.controller');

const routers = express.Router();

// Middlewares
const { Authenticate } = require('../middlewares/authenticate.middleware');
const { AuthorizedCliente } = require('../middlewares/authorizedCliente.middleware');
const { ClienteExists } = require('../middlewares/clienteExists.middeware');

routers.get('/', clienteController.GetClientes);
routers.get('/:id', clienteController.GetClienteById);
routers.post('/cadastrar', ClienteExists, clienteController.CreateCliente);
routers.post('/alterar-senha/:id', Authenticate, AuthorizedCliente, clienteController.UpdateClienteSenha);
routers.put('/:id', Authenticate, AuthorizedCliente, clienteController.UpdateInfosCliente);
routers.delete('/:id', Authenticate, AuthorizedCliente, clienteController.DeleteCliente);

module.exports = routers;