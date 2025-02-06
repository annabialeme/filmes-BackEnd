const {v4: uuid} = require("uuid");

class Movie {
    constructor(diretor, duracao, titulo = 0) {
        this.id = uuidv4();
        this.diretor = diretor;
        this.duracao = duracao;
        this.titulo = titulo;
    }

    play (){
        this.plays +=1;
    }
}

module.export = Movie;