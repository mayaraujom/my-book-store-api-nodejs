'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('clientes',
      [{
        id: 1,
        nome: 'Alexander Magalhães',
        email: 'alexandermagalhaesbookstore@gmail.com',
        senha: 'senhadealexander',
        ddd1: '38',
        telefone1: '991832030',
        cpf: '12345678900',
        rua: 'Rua das Dores',
        numero: '32',
        bairro: 'Bairro das Alegrias',
        cidade: 'Montes Claros',
        estado: 'Minas Gerais',
        cep: 39400000
      },
      {
        id: 2,
        nome: 'Ciara Novaes',
        email: 'ciaranovaesbookstore@gmail.com',
        senha: 'senhadaciara',
        ddd1: '38',
        telefone1: '991832034',
        cpf: '98765432100',
        rua: 'Rua das Alegrias',
        numero: '23',
        bairro: 'Bairro das Dores',
        cidade: 'Montes Claros',
        estado: 'Minas Gerais',
        cep: 39400001
      }], 
      { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
