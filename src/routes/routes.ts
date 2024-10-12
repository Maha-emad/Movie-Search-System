const staticRoutes = {
    notFound: '/404',
    home:'/',
    searchPage: '/search-page',
    favList: '/fav-list'
}

const dynamicRoutes = {
    movieDetails: (_:TemplateStringsArray, movieId:string) =>`/movie/${movieId}`   
};

export {staticRoutes, dynamicRoutes};