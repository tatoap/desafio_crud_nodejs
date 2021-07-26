const { Model, DataTypes } = require('sequelize')

class Expectador extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER
        })
    }
}

module.exports = Expectador;