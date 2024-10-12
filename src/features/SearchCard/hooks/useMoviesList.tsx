import { appConfig } from '@/config';
import { useMovieStore } from '@/providers/MovieStoreProvider';
import { MovieListApiType, MovieType } from '@/types';
import axios from 'axios';
import { useState } from 'react';

export const useGetMoviesList = () => {
	const { setLoading, setList } = useMovieStore((state) => state);
	const [isError, setIsError] = useState<Boolean>(false);
	const [error, setError] = useState<String>('');

	const fetchData = async (page:number) => {
		setLoading(true);

		try {
			const url = `${appConfig.baseUrl}/discover/movie?language=en-US&page=${page}`;
			const options = {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${appConfig.api_token}`
				}
			};

			const res: MovieType[] = (await axios.get<MovieListApiType>(url, options)).data.results.map((movie) => ({
				id: movie.id,
				title: movie.title || movie.original_name || '',
				voteAverage: movie.vote_average,
				backdropPath: movie.backdrop_path,
				overview: movie.overview,
				posterPath: movie.poster_path,
				releaseDate: movie.release_date,
				originalTitle: movie.original_title
			}));

			setList(res);
			setIsError(false);
			setError('');
		} catch (err: any) {
			if (axios.isAxiosError(err)) {
				setIsError(true);
				setError(err.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { fetchMovie: fetchData, isError, error };
};
