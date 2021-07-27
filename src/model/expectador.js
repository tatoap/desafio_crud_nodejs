const { Model, DataTypes } = require('sequelize')

class Expectador extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER
        }, {
            sequelize
        })
    };
};

Expectador.associate = function(model) {
    Expectador.belongsToMany(model.Filme, {
        through: 'expectador_filmes', 
        foreignKey: 'expectador_id', 
        as: 'expectadores'
    })
};

module.exports = Expectador;