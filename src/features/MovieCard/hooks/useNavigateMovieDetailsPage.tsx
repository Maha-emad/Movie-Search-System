import { appConfig } from '@/config';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useNavigateToMovieDetailsPage = () => {
	const { push } = useRouter();

	return useCallback(
		(movieId: string) => {
			push(appConfig.routesMap.movieDetails`${movieId}`);
		},
		[push]
	);
};

export { useNavigateToMovieDetailsPage };
