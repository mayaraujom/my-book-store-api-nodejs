const { Cliente } = require('../models');

const AuthorizedCliente = async (req, res, next) => {
  const { id } = req.params;
  const clienteToUpdate = await Cliente.findOne({ where: { id } });

  const clienteCpf = req.locals.cpf;

  if (clienteToUpdate.cpf !== clienteCpf) {
    res.status(401).json({ message: 'Você não está autorizado a realizar essa ação' });
  }
  
  next();
};

module.exports = {
  AuthorizedCliente,
};