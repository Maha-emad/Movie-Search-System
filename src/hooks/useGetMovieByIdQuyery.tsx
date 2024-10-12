import { appConfig } from '@/config';
import { useRouteMovieId } from '@/hooks';
import { MovieType } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetMovieByIdQuery = () => {
	const [isLoading, setIsLoading] = useState<Boolean>(false);
	const [isFetching, setIsFetching] = useState<Boolean>(false);
	const [isError, setIsError] = useState<Boolean>(false);
	const [error, setError] = useState<String>('');

	const [data, setData] = useState<MovieType>();

	const movieId = useRouteMovieId();

	useEffect(() => {
		setIsLoading(true);
		setIsFetching(true);

		const fetchData = async () => {
			try {
				const url = `${appConfig.baseUrl}/movie/${movieId}`;
				const options = {
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${appConfig.api_token}`
					}
				};

				const res: MovieType = await axios.get(url, options);
				setIsError(false);
				setData(res);
			} catch (err: any) {
				if (axios.isAxiosError(err)) {
					setIsError(true);
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
				setIsFetching(false);
			}
		};

		fetchData();
	}, [movieId]);

	return { isLoading, isFetching, isError, error, data };
};
