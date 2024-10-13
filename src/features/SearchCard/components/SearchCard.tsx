import { MovieCard } from '@/features/MovieCard';
import styles from './SearchCard.module.scss';
import { useGetFilteredList } from '../hooks/useGetFilteredList';
import { CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

export const SearchCard: React.FC = () => {
	const { fetchMovie, data } = useGetFilteredList();
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		fetchMovie(currentPage);
	}, [currentPage]);

	const next = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			<div className={`${styles.index} page container`}>
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
