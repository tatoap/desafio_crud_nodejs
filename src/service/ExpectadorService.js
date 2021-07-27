const Expectador = require('../model/Expectador');
const ExpectadorFilme = require('../model/ExpectadorFilme');
const Filme = require('../model/Filme');

class ExpectadorService {

    listar() {
        return Expectador.findAll();
    }

    async buscar(expectadorId) {
        const expectador = await Expectador.findByPk(expectadorId);
        return expectador;
    }

    adicionar(nome, idade) {
        const expectador = Expectador.create({
            nome: nome, 
            idade: idade
        });
        return expectador;
    }

    atualizar(expectadorId, nome, idade) {
        const expectador = Expectador.update({
            nome: nome, 
            idade: idade
        },{
            where: {
                id: expectadorId
            }
        });
        return expectador;
    }

    excluir(expectadorId) {
        Expectador.destroy({
            where: {
                id: expectadorId
            }
        });
    }

    listarFilmesPorExpectador(expectadorId) {
        const filmes = ExpectadorFilme.count({
            where: {
                expectador_id: expectadorId
            }
        });
        return filmes;
    }

    async marcarFilmeVisto(expectadorId, filmeId) {
        console.log(filmeId + ' - ' + expectadorId);
        
        const temRegistro = await ExpectadorFilme.findOne({
            where: {
                filme_id: filmeId,
                expectador_id: expectadorId
            }
        });

        if (!temRegistro) {
            console.log('teste marcarFilme');
            await ExpectadorFilme.create({
                filme_id: filmeId, 
                expectador_id: expectadorId
            });
            return true;
        } else {
            console.log('já tem cadastro');
            return false;
        }
    }

}

module.exports = ExpectadorService;