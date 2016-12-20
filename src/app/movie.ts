export class Movie {
    id: Number;
    title: String;
    year: Number;
    summary: String;
    director: {
        id: Number,
        name: String
    };
    genre: {
        id: Number,
        name: String
    }
}
