import { routesMap, type RoutesMap } from '@/routes';

type AppConfigType = {
	api_token: string;
	baseUrl: string;
	posterUrl: string;
	backDropUrl: string;
	routesMap: RoutesMap;
};

export const appConfig: AppConfigType = {
	api_token: process.env.NEXT_PUBLIC_API_TOKEN || '',
	baseUrl: 'https://api.themoviedb.org/3',
	posterUrl: 'https://image.tmdb.org/t/p/w500',
	backDropUrl: 'https://image.tmdb.org/t/p/w1280',
	routesMap
};
