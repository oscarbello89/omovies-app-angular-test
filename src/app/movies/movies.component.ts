import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
  }

  onTitleClick(movie: Movie): void {
    alert('Click on: ' + movie.title);
  }

  isYoungMovie(year: number): boolean {
    return year > 2000
  }

  onFavouriteMovieClick(movie: Movie): void {
    this.moviesService.saveFavouriteMovie(movie);
  }


}
