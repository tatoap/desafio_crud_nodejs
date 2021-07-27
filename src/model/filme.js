const { Model, DataTypes } = require('sequelize')

class Filme extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            genero: DataTypes.STRING,
            ano_lancamento: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

Filme.associate = function(model) {
    Filme.belongsToMany(model.Expectador, {
        through: 'expectador_filmes', 
        foreignKey: 'filme_id', 
        as: 'filmes'
    })
};

module.exports = Filme;