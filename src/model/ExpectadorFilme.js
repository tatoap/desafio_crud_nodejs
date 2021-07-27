const { Model, DataTypes } = require('sequelize');

class ExpectadorFilme extends Model {
    static init(sequelize) {
        super.init({
            filme_id: DataTypes.INTEGER,
            expectador_id: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

ExpectadorFilme.associate = function(model) {
    ExpectadorFilme.belongsTo(model.Filme, {foreignKey: 'filme_id'});
    ExpectadorFilme.belongsTo(model.Expectador, {foreignKey: 'expectador_id'});
};

module.exports = ExpectadorFilme;