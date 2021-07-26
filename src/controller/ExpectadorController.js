const Expectador = require('../model/Expectador')

module.exports = {
    async index(req, res) {
        const expectadores = await Expectador.findAll();
        return res.json(expectadores);
    },

    async findById(req, res) {
        const { expectadorId } = req.params;
        const expectador = await Expectador.findAll({
            where: {
                id: expectadorId
            }
        });
        return res.json(expectador);
    }
}