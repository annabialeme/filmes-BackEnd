class MovieList {
    constructor(){
        this.movies = [];
    } 

    addMovie(movie) {
        this.movies.push(movie);
    }

    getMovieCount() {
        return this.movies.length;
    }

    getAllMovie() {
        return this.movies;
    }

    getMovieById(id) {
        const movie = this.movie.find(movie => movie.id == id);
        if (!movie) throw new Error("Filme não encontrado");
        return movie;
    }

    updateMovie(id, updateData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(song => movie.id != id);
    }

    getTop10Movies() {
        console.log(this.movies);
        return this.movies.sort((a,b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = MovieList;