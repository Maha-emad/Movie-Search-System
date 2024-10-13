import { appConfig } from '@/config';
import { useRouteMovieId } from '@/hooks';
import { CreditsApiType, MovieApiType, MovieType } from '@/types';
import { parseMovie } from '@/utils';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useGetMovieByIdQuery = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [data, setData] = useState<MovieType>();
	const movieId = useRouteMovieId();

	const fetchData = async () => {
		try {
			const movieUrl = `${appConfig.baseUrl}/movie/${movieId}?language=en-US`;
			const creditsUrl = `${appConfig.baseUrl}/movie/${movieId}/credits?language=en-US`;

			const options = {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${appConfig.api_token}`
				}
			};

			const resMovieApi: MovieApiType = (await axios.get<MovieApiType>(movieUrl, options)).data;
			console.log('🚀 ~ fetchData ~ resMovieApi:', resMovieApi);
			const creditsApi: CreditsApiType = (await axios.get<CreditsApiType>(creditsUrl, options)).data;
			console.log('🚀 ~ fetchData ~ creditsApi:', creditsApi);

			const parsedMovie = parseMovie(resMovieApi, creditsApi);

			setData(parsedMovie);
			setIsError(false);
		} catch (err: any) {
			console.log('🚀 ~ fetchData ~ err:', err);
			if (axios.isAxiosError(err)) {
				setIsError(true);
				setError(err.message);
			}
			// router.push(appConfig.routesMap.notFound``);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setIsLoading(true);

		if (router && router.isReady && movieId !== undefined) {
			fetchData();
		}
	}, [movieId, router]);

	return { isLoading, isError, error, movie: data };
};
