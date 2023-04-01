const express = require('express');
const clienteController = require('../controllers/cliente.controller');

const routers = express.Router();

routers.get('/', clienteController.GetClientes);
routers.get('/:id', clienteController.GetClienteById);
routers.post('/cadastrar', clienteController.CreateCliente);
routers.delete('/:id', clienteController.DeleteCliente);

module.exports = routers;