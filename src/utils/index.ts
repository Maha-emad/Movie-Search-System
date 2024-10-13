import { CreditsApiType, MovieApiType, MovieListType, MovieType } from '@/types';

export const parsMovieList = (movie: MovieApiType): MovieListType => {
	const resMovie = {
		id: movie.id,
		title: movie.title || movie.original_name || '',
		voteAverage: Math.round(Number(movie.vote_average) * 10) / 10,
		backdropPath: movie.backdrop_path,
		overview: movie.overview,
		posterPath: movie.poster_path,
		releaseDate: movie.release_date,
		originalTitle: movie.original_title,
		originalName: movie.original_name
	};

	return resMovie;
};

export const parseMovie = (movie: MovieApiType, credits: CreditsApiType): MovieType => {
	const movieType = parsMovieList(movie);

	const cast = credits.cast
		.sort((a, b) => b.popularity - a.popularity)
		.map((cast) => cast.name)
		.slice(0, 5);
	const director = credits.crew.find((crew) => crew.job === 'Director')?.name || '';
	const genres = movie.genres.map((genre) => genre.name);

	return { ...movieType, tagline: movie.tagline, runtime: movie.runtime, genres, cast, director };
};
