import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MoviesService } from './movies.service';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    FooterComponent,
    FavouritesComponent,
    ImpressivePipe,
    TableSuccessDirective,
    MovieTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
