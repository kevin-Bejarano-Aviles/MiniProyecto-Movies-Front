import { Actor, Actor_Movie } from './Actors';
import { Genre } from "./Genres";

/* comienzo traer todas las peliculas */
export interface AllMovies {
    data: Movie[];
    msg:  string;
}

export interface Movie {
    id:           number;
    title:        string;
    rating:       string;
    awards:       number;
    release_date: string;
    length:       number;
    genre_id:     number;
    createdAt:    null | string;
    updatedAt:    null | string;
}
/* fin traer todas las peliculas */

/* comienzo traer una pelicula */
export interface MovieDetailById {
    data: MovieWithInclude;
    msg:  string;
}

export interface MovieWithInclude extends Movie {
    genero:        Genre;
    actores:       MovieActors[];
}
/* fin traer una pelicula */
export interface MovieActors extends Actor {
    Actor_movieModel: Actor_Movie;
}

/* formulario para crear o editar una pelicula */
export interface DataFormMovie {
    title: string;
    rating: string;
    awards: string|number;
    release_date: string;
    length: string|number;
    genre_id: string|number;
}
