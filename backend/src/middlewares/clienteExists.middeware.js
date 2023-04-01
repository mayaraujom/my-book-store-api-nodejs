const { Cliente } = require('../models');

const ClienteExists = async (req, res, next) => {
  const { cpf, email } = req.body;

  const existCpf = await Cliente.findOne({ where: { cpf } });
  const existEmail = await Cliente.findOne({ where: { email } });

  if (existCpf || existEmail) return res.status(400).json({ message: 'Já existe um usuário cadastrado com esse número de CPF'  });

  next();
};

module.exports = {
  ClienteExists,
};