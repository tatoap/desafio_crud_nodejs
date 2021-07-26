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

module.exports = Filme;