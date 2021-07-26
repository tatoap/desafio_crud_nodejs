const Filme = require('../model/Filme')

module.exports = {
    async index(req, res) {
        const filmes = await Filme.findAll();
        return res.json(filmes);
    },

    async findById(req, res) {
        const { filmeId } = req.params;
        const filme = await Filme.findAll({
            where: {
                id: filmeId
            }
        });
        return res.json(filme);
    }
}