const ClienteSchema = (sequelize, DataTypes) => {
    const ClienteTable = sequelize.define('Cliente', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        ddd1: DataTypes.STRING,
        telefone1: DataTypes.STRING,
        cpf: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep: DataTypes.INTEGER
    },
        {
            tableName: 'clientes',
            underscored: true,
            timestamps: false,
        });

    // ClienteTable.associate = (modelsaqui) => {
        
    // }

    return ClienteTable;
}

module.exports = ClienteSchema;
