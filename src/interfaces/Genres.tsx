/* comienzo traer todos los generos */

import { Movie } from "./Movies";

export interface AllGenres {
    data: Genre[];
    msg:  string;
}

export interface Genre {
    id:        number;
    name:      string;
    ranking:   number;
    active:    number;
    createdAt: string;
    updatedAt: null;
}
/* fin traer todos los generos */

/* comienzo traer solo un genero */
export interface GenreDetailById {
    data: GenreWithInclude;
    msg:  string;
}

export interface GenreWithInclude extends Genre{
    movies:    Movie[];
}
/* fin traer solo un genero */