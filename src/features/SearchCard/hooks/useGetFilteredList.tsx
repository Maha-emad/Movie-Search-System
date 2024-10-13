import { appConfig } from '@/config';
import { useMovieStore } from '@/providers/MovieStoreProvider';
import { useSearchStore } from '@/providers/SearchStoreProvider';
import { MovieApiType, MovieListType, MovieType } from '@/types';
import { parsMovieList } from '@/utils';
import axios from 'axios';
import { useState } from 'react';
type AxiosMovieList = {
	page: number;
	results: MovieApiType[];
};
export const useGetFilteredList = () => {
	const [isError, setIsError] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<MovieListType[]>([]);
	const { getSearchTerm } = useSearchStore((state) => state);

	const fetchData = async (page: number) => {
		setLoading(true);
		const searchTerm = getSearchTerm();

		try {
			const url = `${appConfig.baseUrl}/search/movie`;
			const options = {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${appConfig.api_token}`
				},
				params: {
					page: page,
					query: searchTerm
				}
			};

			const resMovie: MovieApiType[] = (await axios.get<AxiosMovieList>(url, options)).data.results;
			const parsedMovie: MovieListType[] = resMovie.map((movie) => parsMovieList(movie));

			setData((prevData) => [...prevData, ...parsedMovie]);
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

	return { fetchMovie: fetchData, isError, error, data };
};
