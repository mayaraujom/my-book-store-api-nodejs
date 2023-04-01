const { Cliente } = require('../models');
const { generateToken } = require('../utils/JWT');

const getClientes = async () => {
  const clientes = await Cliente.findAll({ attributes: { exclude: ['senha'] } });

  return clientes;
};

const getClienteById = async (id) => {
  const cliente = await Cliente.findOne({ where: { id }, attributes: { exclude: ['senha'] }, });

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

  const created = await Cliente.create({ nome, email, senha, ddd1, telefone1, cpf, rua, numero, bairro, cidade, estado, cep });
  const payload = { cpf, nome, email };
  const token = generateToken(payload);
  return { token, cliente: created };
};

const updateClienteSenha = async (cpf, senhaAtual, senhaNova) => {
  const cliente = await Cliente.findOne({ where: { cpf, }, attributes: { include: ['senha'] } });

  if (cliente.dataValues.senha !== senhaAtual) throw { status: 400, message: 'Senha atual incorreta' };

  await Cliente.update({ senha: senhaNova }, { where: { cpf } });

  return;
}

const updateInfosCliente = async (id, body) => {
  const { nome, ddd1, telefone1, rua, numero, bairro, cidade, estado, cep } = body;

  await Cliente.update({ nome, ddd1, telefone1, rua, numero, bairro, cidade, estado, cep }, {
    where: { id, },
  });

  const clenteUpdated = await getClienteById(id);
  return clenteUpdated;
};

const deleteCliente = async (id) => {
  await Cliente.destroy({ where: { id } });
};

module.exports = {
  getClientes,
  getClienteById,
  getClienteByCpf,
  createCliente,
  updateClienteSenha,
  updateInfosCliente,
  deleteCliente
};