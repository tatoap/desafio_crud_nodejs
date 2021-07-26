const Expectador = require('../model/Expectador')

module.exports = {
    async index(req, res) {
        const expectadores = await Expectador.findAll();
        return res.json(expectadores);
    }
}