import { MovieType } from "./types";

  export const getFavorites = (): MovieType[] => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  
  export const saveFavorites = (favorites: MovieType[]): void => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  

  export const isFavorite = (movieId: string): boolean => {
    const favorites = getFavorites();
    return favorites.some((movie) => movie.id === movieId);
  };
  

  export const toggleFavorite = (movie: MovieType): MovieType[] => {
    
    const favorites = getFavorites();
    const isFav = isFavorite(movie.id);
  
    if (isFav) {
    
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      saveFavorites(updatedFavorites);
      return updatedFavorites;

    } else {
   
      const updatedFavorites = [...favorites, movie];
      saveFavorites(updatedFavorites); 
      console.log(updatedFavorites);
      return updatedFavorites;
    }
  };
  