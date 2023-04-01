const { Cliente } = require('../models');
const { generateToken } = require('../utils/JWT');

const getClientes = async () => {
  const clientes = await Cliente.findAll({ attributes: { exclude: ['senha'] } });

  return clientes;
};

const getClienteById = async (id) => {
  const cliente = await Cliente.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['senha'] },
  });

  if (!cliente) throw { status: 404, message: 'Cliente não encontrado' };

  return cliente.dataValues;
};

const getClienteByCpf = async (cpf) => {
  const cliente = await Cliente.findOne({ where: { cpf, }, attributes: { exclude: ['senha'] }, });

  if (!cliente) throw { status: 404, message: 'Cliente não encontrado' };

  return cliente.dataValues;
};

const createCliente = async (body) => {
  const { nome, email, senha, ddd1, telefone1, cpf, rua, numero, bairro, cidade, estado, cep } = body;

  const exist = await Cliente.findOne({ where: { cpf } });
  if (exist) throw { status: 400, message: 'Já existe um usuário cadastrado com esse número de CPF' };

  await Cliente.create({ nome, email, senha, ddd1, telefone1, cpf, rua, numero, bairro, cidade, estado, cep });
  const payload = { cpf, nome, email };
  return generateToken(payload);
};

const deleteCliente = async (id) => {
  await Cliente.destroy({ where: { id } });
};

module.exports = {
  getClientes,
  getClienteById,
  getClienteByCpf,
  createCliente,
  deleteCliente
};