

export interface ReqErrorForm {
    message: string;
    data:    Data;
}

export interface Data {
    errors: ErrorField;
}


export interface ErrorField {
    title:        ErrorContent;
    rating:       ErrorContent;
    awards:       ErrorContent;
    length:       ErrorContent;
    release_date: ErrorContent;
    genre_id:     ErrorContent;
}
export interface ErrorContent {
    msg:      string;
    param:    string;
    location: string;
}
