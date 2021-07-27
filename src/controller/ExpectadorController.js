const ExpectadorService = require('../service/ExpectadorService')
const FilmeService = require('../service/FilmeService');
const errors = require('restify-errors');

var expectadorService = new ExpectadorService();
var filmeService = new FilmeService();

module.exports = {
    async listar(req, res) {
        return res.json(await expectadorService.listar());
    },

    async procurarPorId(req, res) {
        const { expectadorId } = req.params;
        const expectador = await expectadorService.buscar(expectadorId);
        
        if (!expectador) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de expectador com o id ' + expectadorId))
        } else {
            return res.json(expectador);
        }
    }, 

    async salvar(req, res) {
        const { nome, idade } = req.body;
        const expectador = await expectadorService.adicionar(nome, idade);
        return res.json(expectador);
    },

    async atualizar(req, res) {
        const { nome, idade } = req.body;
        const { expectadorId } = req.params;
        const expectador = await expectadorService.buscar(expectadorId);

        if (!expectador) {
            return res.status(400).send( new errors.BadRequestError('Não existe um cadastro de expectador com o id ' + expectadorId))
        } else {
            await expectadorService.atualizar(expectadorId, nome, idade);
            return res.json(await expectadorService.buscar(expectadorId));
        }
    },

    async excluir(req, res) {
        const { expectadorId } = req.params;
        const expectador = await expectadorService.buscar(expectadorId);

        if (expectador.length === 0) {
            return res.status(400).send( new errors.BadRequestError('Não existe um cadastro de expectador com o id ' + expectadorId))
        } else {
            await expectadorService.excluir(expectadorId);
            return res.sendStatus(204);
        }
    },

    async filmesPorExpectador(req, res) {
        const { expectadorId } = req.params;
        const expectador = await expectadorService.buscar(expectadorId);

        if (!expectador) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de expectador com o id ' + expectadorId))
        } else {
            const totalFilmes = await expectadorService.listarFilmesPorExpectador(expectadorId);
            return res.json('Quantidade de filmes que viu o expectador ' + expectador.nome + ': ' + totalFilmes);
        }
    },

    async marcarFilmeVisto(req, res) {
        const { expectadorId } = req.params;
        const { filmeId } = req.params;
        const expectador = await expectadorService.buscar(expectadorId);
        const filme = await filmeService.buscar(filmeId);

        if (!expectador) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de expectador com o id ' + expectadorId));
        }

        if (!filme) {
            return res.status(400).send(new errors.BadRequestError('Não existe um cadastro de filme com o id ' + filmeId));
        }
        
        const marcandoFilme = await expectadorService.marcarFilmeVisto(expectadorId, filmeId);

        if (marcandoFilme) {
            return res.json('O filme ' + filme.nome + ' foi visto pelo(a) ' + expectador.nome);
        } else {
            return res.json('O(A) expectador(a) ' + expectador.nome + ' já viu esse filme!');
        }
        
    }
}