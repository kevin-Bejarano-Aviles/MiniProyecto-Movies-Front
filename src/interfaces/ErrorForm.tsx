

export interface ReqErrorForm {
    message: string;
    data:    Data;
}

export interface Data {
    errors: Errors;
}

export interface Errors {
    title:        Campo;
    rating:       Campo;
    awards:       Campo;
    length:       Campo;
    release_date: Campo;
    genre_id:     Campo;
}

export interface Campo {
    msg:      string;
    param:    string;
    location: string;
}
