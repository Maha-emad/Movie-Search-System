import styles from './FavList.module.scss';
import { MovieCard } from '../../MovieCard';
import { useState, useEffect } from 'react';
import { MovieType } from '@/types';
import { getFavorites } from '@/localStorageUtils';

export const FavList: React.FC = () => {
	const [FavList, setFavList] = useState<MovieType[]>([]);

	useEffect(() => {
		const storedFavorites = getFavorites();
		setFavList(storedFavorites);
	}, []);

	return (
		<div className={`${styles.FavPage} page container`}>
			<div className={styles.header}>
				<h1>Check your Favs 😉</h1>
			</div>

			{FavList.length > 0 ? (
				<div className={`${styles.listsContainer}  listGrid`}>
					{FavList.map((fav) => (
						<MovieCard data={fav} />
					))}
				</div>
			) : (
				<div className={styles.noResultsContainer} v-if="noResults">
					<h2>No Favorite movies yet !</h2>
				</div>
			)}
		</div>
	);
};
