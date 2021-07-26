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
    },

    async save(req, res) {
        const { nome, idade } = req.body;
        const expectador = await Expectador.create({
            nome, idade
        });
        return res.json(expectador)
    },

    async delete(req, res) {
        const { expectadorId } = req.params;
        await Expectador.destroy({
            where: {
                id: expectadorId
            }
        });
        return res.sendStatus(204)
    }
}