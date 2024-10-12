export interface MovieType {
	id: string;
	title: string;
	voteAverage: number;
	backdropPath: string;
	overview: string;
	posterPath: string;
	originalTitle: string;
    releaseDate: string
}
export interface MovieApiType {
	id: string;
	title: string;
	adult: string;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
    original_name?: string;
}
export interface MovieListApiType {
	page: number;
	results: MovieApiType[];
}
