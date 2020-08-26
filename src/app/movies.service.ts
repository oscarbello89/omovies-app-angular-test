import { Injectable } from '@angular/core';
import { Movie } from '../domain/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [
    {
      "title":"Eternal Sunshine of the Spotless Mind",
      "year":2004,
      "imdbID":"tt0338013",
      "genre":"Drama, Romance, Sci-Fi",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg"
    },
    {
      "title":"Die Hard",
      "year":1988,
      "imdbID":"tt0095016",
      "genre":"Action, Thriller ",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX300.jpg"
    },
    {
      "title":"Die Hard 2",
      "year":1990,
      "imdbID":"tt0099423",
      "genre":"Action, Thriller ",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "title":"Die Hard with a Vengeance",
      "year":1995,
      "imdbID":"tt0112864",
      "genre":"Action, Adventure, Thriller",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjI0ZWFiMmQtMjRlZi00ZmFhLWI4NmYtMjQ5YmY0MzIyMzRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ];

  favouriteMovies: Movie[] = [];

  constructor() { }

  saveFavouriteMovie(movie: Movie): void {
    if(!this.favouriteMovies.includes(movie)){
      this.favouriteMovies.push(movie);
    }

  }

}
