// Generated by https://quicktype.io

export interface ActorDetailByID {
    data: OneActor;
    msg:  string;
}

export interface OneActor {
    id:                number;
    first_name:        string;
    last_name:         string;
    rating:            string;
    favorite_movie_id: number;
    createdAt:         null;
    updatedAt:         null;
    movies:            MoviesActor[];
}

export interface MoviesActor {
    id:           number;
    title:        string;
    rating:       string;
    awards:       number;
    release_date: string;
    length:       number;
    genre_id:     number;
    createdAt:    null;
    updatedAt:    null;
    actor_movie:  ActorMovie;
}

export interface ActorMovie {
    actorId:   number;
    movieId:   number;
    createdAt: null;
    updatedAt: null;
}
