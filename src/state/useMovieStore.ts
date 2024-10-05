// import create from 'zustand';

// interface Movie {
 
//   // Add other movie properties as needed
// }

// interface MovieState {
//   movies: Movie[];                // List of movies from search results
//   favorites: Movie[];             // List of favorite movies
//   searchMovies: (query: string) => void; // Function to fetch/search movies
//   addToFavorites: (movie: Movie) => void;  // Function to add a movie to favorites
//   removeFromFavorites: (movieId: number) => void;  // Function to remove a movie from favorites
// }

// export const useMovieStore = create<MovieState>((set) => ({
//   movies: [],
//   favorites: [],
  
//   // Function to search for movies (mock fetch in this case)
//   searchMovies: (query: string) => {
//     fetch(`https://api.example.com/movies?search=${query}`)
//       .then(response => response.json())
//       .then(data => {
//         set({ movies: data.results });
//       });
//   },
  
//   // Add a movie to favorites
//   addToFavorites: (movie) => set((state) => ({
//     favorites: [...state.favorites, movie]
//   })),

//   // Remove a movie from favorites
//   removeFromFavorites: (movieId) => set((state) => ({
//     favorites: state.favorites.filter(movie => movie.id !== movieId)
//   }))
// }));
