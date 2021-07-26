const Filme = require('../model/Filme')

module.exports = {
    async index(req, res) {
        const filmes = await Filme.findAll();
        return res.json(filmes);
    }
}