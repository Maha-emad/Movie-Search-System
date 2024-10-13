const staticRoutes = {
	notFound: '/404',
	home: '/',
	searchPage: '/search',
	favList: '/fav-list'
};
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

type RoutesMap = typeof routesMap;

const dynamicRoutes = {
	movieDetails: (_: TemplateStringsArray, movieId: string) => `/movie-details/${movieId}`
};

const routesMap = {
	...mutateStaticRoutes(staticRoutes),
	...dynamicRoutes
} as const;

export { routesMap, type RoutesMap };
