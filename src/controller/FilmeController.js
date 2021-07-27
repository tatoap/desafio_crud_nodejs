const FilmeService = require('../service/FilmeService')
const errors = require('restify-errors');

var filmeService = new FilmeService();

module.exports = {
    async listar(req, res) {
        return res.json(await filmeService.listar());
    },

    async procurarPorId(req, res) {
        const { filmeId } = req.params;
        const filme = await filmeService.buscar(filmeId);

        if (!filme) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de filme com o id ' + filmeId))
        } else {
            return res.json(filme);
        }
    }, 

    async salvar(req, res) {
        const { nome, genero, ano_lancamento } = req.body;
        const filme = await filmeService.adicionar(nome, genero, ano_lancamento);
        return res.json(filme);
    },

    async atualizar(req, res) {
        const { nome, genero, ano_lancamento } = req.body;
        const { filmeId } = req.params;
        const filme = await filmeService.buscar(filmeId);

        if (!filme) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de filme com o id ' + filmeId))
        } else {
            await filmeService.atualizar(filmeId, nome, genero, ano_lancamento);
            return res.json(await filmeService.buscar(filmeId));
        }
    },

    async excluir(req, res) {
        const { filmeId } = req.params;
        const filme = await filmeService.buscar(filmeId);

        if (!filme) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de filme com o id ' + filmeId))
        } else {
            await filmeService.excluir(filmeId);
            return res.sendStatus(204);
        }
    },

    async expectadoresPorFilme(req, res) {
        const { filmeId } = req.params;
        const filme = await filmeService.buscar(filmeId);
        
        if (!filme) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de filme com o id ' + filmeId))
        } else {
            const totalExpectadores = await filmeService.listarExpectadoresPorFilme(filmeId);
            return res.json('Quantidade de expectadores que viram o filme ' + filme.nome + ': ' + totalExpectadores);
        }
    }
}