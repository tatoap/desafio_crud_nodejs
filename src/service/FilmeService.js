const Filme = require('../model/Filme')
const FilmeExpectador = require('../model/ExpectadorFilme')

class FilmeService {

    listar() {
        return Filme.findAll();
    }

    async buscar(filmeId) {
        const filme = await Filme.findByPk(filmeId);
        return filme;
    }

    adicionar(nome, genero, ano_lancamento) {
        const filme = Filme.create({
            nome: nome, 
            genero: genero, 
            ano_lancamento: ano_lancamento
        });
        return filme;
    }

    atualizar(filmeId, nome, genero, ano_lancamento) {
        const filme = Filme.update({
            nome, genero, ano_lancamento
        },{
            where: {
                id: filmeId
            }
        });
        return filme;
    }

    excluir(filmeId) {
        Filme.destroy({
            where: {
                id: filmeId
            }
        });
    }

    listarExpectadoresPorFilme(filmeId) {
        const expectadores = FilmeExpectador.count({
            where: {
                filme_id: filmeId
            }
        });
        return expectadores;
    }
}

module.exports = FilmeService;