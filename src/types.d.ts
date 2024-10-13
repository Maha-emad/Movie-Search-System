export interface MovieListType {
	id: string;
	title: string;
	backdropPath: string;
	voteAverage: number;
	overview: string;
	posterPath: string;
	originalTitle: string;
	originalName: string;
	releaseDate: string;
}

export interface MovieType extends MovieListType {
	runtime: number;
	genres: string[];
	cast: string[];
	director: string;
	tagline: string;
}

export interface MovieApiType {
	id: string;
	title: string;
	backdrop_path: string;
	original_name: string;
	vote_average: number;
	overview: string;
	poster_path: string;
	release_date: string;
	runtime: number;
	original_title: string;
	tagline: string;
	genres: { id: number; name: string }[];
}

export interface CreditsApiType {
	cast: {
		name: string;
		known_for_department: string;
		popularity: number;
	}[];
	crew: {
		name: string;
		job: string;
	}[];
}
