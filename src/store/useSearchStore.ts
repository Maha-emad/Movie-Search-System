import { createStore } from 'zustand';

type SearchState = {
	searchTerm: string;
};

type SearchAction = {
	setSearchTerm: (searchTerm: SearchState['searchTerm']) => void;
	getSearchTerm: () => SearchState['searchTerm'];
};

const defaultInitState: SearchState = {
	searchTerm: ''
};

export const initSearchState = (): SearchState => {
	return {
		searchTerm: ''
	};
};

export type SearchStore = SearchAction & SearchState;

export const createSearchStore = (initState: SearchState = defaultInitState) => {
	return createStore<SearchStore>()((set, get) => ({
		...initState,
		setSearchTerm: (searchTerm: SearchState['searchTerm']) => set(() => ({ searchTerm })),
		getSearchTerm: () => get().searchTerm
	}));
};
