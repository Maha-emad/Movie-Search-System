import { useRouter } from 'next/router';
import { useMemo } from 'react';

const useRouteMovieId = (): string | undefined => {
	const router = useRouter();

	const { movieId } = router.query;

	return useMemo<string | undefined>(() => (movieId ? String(movieId) : movieId), [movieId]);
};

export { useRouteMovieId };
