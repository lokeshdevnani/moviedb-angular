export class Movie {
    id: Number;
    title: String;
    releaseYear: Number;
    summary: String;
    director: {
        id: Number,
        name: String
    };
    genre: {
        id: Number,
        name: String
    };

    constructor() {
        this.genre = {id: 0, name: ''};
        this.director = {id: 0, name: ''};
    }
}
