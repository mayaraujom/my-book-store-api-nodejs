const { Cliente } = require('../models');
const { generateToken } = require('../utils/JWT');

const Login = async ({ email, senha }) => {
    const cliente = await Cliente.findOne({
        where: { email, senha },
        attributes: ['cpf', 'nome']
    });

    if (!cliente) {
        throw { status: 400, message: 'E-mail ou senha incorretos'};
    }

    const token = generateToken({ cpf: cliente.dataValues.cpf, nome: cliente.dataValues.nome, email });

    return { token };
};

module.exports = {
    Login,
};