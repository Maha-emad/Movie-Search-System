'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type MovieStore, createMovieStore, initMovieStore } from '@/store/useMovieListStore';

export type MovieStoreApi = ReturnType<typeof createMovieStore>;

export const MovieStoreContext = createContext<MovieStoreApi | undefined>(undefined);

export interface MovieStoreProviderProps {
	children: ReactNode;
}

export const MovieStoreProvider = ({ children }: MovieStoreProviderProps) => {
	const storeRef = useRef<MovieStoreApi>();
	if (!storeRef.current) {
		storeRef.current = createMovieStore(initMovieStore());
	}

	return <MovieStoreContext.Provider value={storeRef.current}>{children}</MovieStoreContext.Provider>;
};

export const useMovieStore = <T,>(selector: (store: MovieStore) => T): T => {
	const movieStoreContext = useContext(MovieStoreContext);

	if (!movieStoreContext) {
		throw new Error(`useMoveStore must be used within MovieStoreProvider`);
	}

	return useStore(movieStoreContext, selector);
};
