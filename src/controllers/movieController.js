const Movie = require("../models/movie");
const MovieList = require("../models/movieList");

const lista = new MovieList();

lista.addMovie(new Movie("Susan Johnson", "1:39m", "Para todos os garotos que já amei"));
lista.addMovie(new Movie("Will Gluck", "1:43m", "Todos menos você"));

const router = {
    getAllMovies: (req,res) => {
        try {
            res.json(lista.getAllMovies());
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filmes", error});
        }
    },

    getSongById: (req, res) => {
        try {
        res.json(lista.getMovieById(req.params.id));
        } catch (error) {
            res.status(404).json({message: "Filme não encontrado", error});
        }
    },

    addMovie: (req, res) => {
        try {
            const {diretor, duracao, titulo} = req.body;
            if (!diretor || !duracao || !titulo === undefined) {
                throw new Error("Todos o scampos são os obrigatórios");
            }
            const newMovie = new Movie(diretor, duracao, titulo);
            lista.addMovie(newMovie);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(400).json({message: error.message, error})
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({message: "Filme deletado com sucesso", IdDeletado: req.params.id});
        } catch (error) {
            res.status(404).json({message: "Erro ao deletar filme", error});
        }
    }
};

module.exports = router;