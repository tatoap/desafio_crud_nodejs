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
    }, 

    async save(req, res) {
        const { nome, genero, ano_lancamento } = req.body;
        const filme = await Filme.create({
            nome, genero, ano_lancamento
        });
        return res.json(filme)
    },

    async delete(req, res) {
        const { filmeId } = req.params;
        await Filme.destroy({
            where: {
                id: filmeId
            }
        });
        return res.sendStatus(204)
    }
}