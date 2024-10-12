import { MovieType } from '@/types';
import { createStore } from 'zustand/vanilla';

type MovieState = {
	loading: boolean;
	movieList: MovieType[];
};

type MovieAction = {
	setLoading: (loading: MovieState['loading']) => void;
	setList: (movieList: MovieState['movieList']) => void;
	getLoading: () => MovieState['loading'];
	getList: () => MovieState['movieList'];
};

const defaultInitState: MovieState = {
	loading: false,
	movieList: []
};

export const initMovieStore = (): MovieState => {
	return {
		loading: false,
		movieList: []
	};
};
export type MovieStore = MovieAction & MovieState;


export const createMovieStore = (initState: MovieState = defaultInitState) => {
	return createStore<MovieStore>()((set, get) => ({
		...initState,
		setLoading: (loading: MovieState['loading']) => set(() => ({ loading })),
		setList: (movieList: MovieState['movieList']) => set((state) => ({ movieList: [...state.movieList, ...movieList] })),
		getLoading: () => get().loading,
		getList: () => get().movieList,
	}));
};
