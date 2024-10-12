import { create } from 'zustand';

type State = {
	searchTerm: string;
};

type Action = {
	setSearchTerm: (searchTerm:State['searchTerm']) => void;
	getSearchTerm: ()=> State['searchTerm']
};

const useSearchState = create<State & Action>((set, get) => ({
	searchTerm: '',
    setSearchTerm: (searchTerm) => set(()=> ({searchTerm})),
	getSearchTerm: ()=> get().searchTerm
}));

export { useSearchState };