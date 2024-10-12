import { Navbar } from '@/components/Layouts/Navbar';
import { MovieCard } from '@/features/MovieCard';
import styles from './SearchCard.module.scss';
import { SearchBar } from '@/components/SearchBar';
import { useGetMoviesList } from '../hooks/useMoviesList';
import { Alert, CircularProgress } from '@mui/material';
import { LoadMoreButton } from '@/components/LoadMoreButton/loadMore';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovieStore } from '@/providers/MovieStoreProvider';
import { useEffect, useState } from 'react';

export const SearchCard: React.FC = () => {
	const { fetchMovie, error, isError } = useGetMoviesList();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { getLoading, getList } = useMovieStore((state) => state);
	const isLoading = getLoading();
	const data = getList();

	useEffect(() => {
		fetchMovie(currentPage);
	}, [currentPage]);

	const next = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			<Navbar />
			<div className={`${styles.index} page container`}>
				<div className={styles.header}>
					<h1>M_flicks</h1>
					<div className={styles.searchWrapper}>
						<SearchBar />
					</div>
				</div>
				<InfiniteScroll
					className={`container listGrid`}
					dataLength={data.length}
					hasMore={true}
					next={next}
					loader={<CircularProgress />}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{data.map((movie, index) => (
						<div key={index}>
							<MovieCard data={movie} />
						</div>
					))}
				</InfiniteScroll>
			</div>
		</>
	);
};
