import { staticRoutes, dynamicRoutes } from '@/routes';

const mutateStaticRoutes = (routes: typeof staticRoutes) => {
	const newRoutes: {
		[key: string]: (...args: any | string[]) => string;
	} = {};

	Object.keys(routes).forEach((key) => {
		const newKey = key as keyof typeof staticRoutes;
		newRoutes[newKey] = (_: any) => routes[newKey];
	});

	return newRoutes as Record<keyof typeof staticRoutes, (_: any) => string>;
};

type RoutesMap = typeOf routesMap;

type AppConfigType = {
	api_token: string;
	baseUrl: string;
  routesMap: RoutesMap
};

const routesMap = {
	...mutateStaticRoutes(staticRoutes),
	...dynamicRoutes
};

export const appConfig: AppConfigType = {
	api_token: process.env.NEXT_PUBLIC_API_TOKEN || '',
	baseUrl: 'https://api.themoviedb.org/3',
	routesMap
};
