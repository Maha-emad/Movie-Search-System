'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from './MovieCard.module.scss';
import StarIcon from '@/assets/images/StarIcon.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState, useEffect } from 'react';
import { MovieListType } from '@/types';
import { appConfig } from '@/config';
import { isFavorite, toggleFavorite } from '@/localStorageUtils';
import { useNavigateToMovieDetailsPage } from '../hooks/useNavigateMovieDetailsPage';
import { useRouter } from 'next/router';

export const MovieCard: React.FC<{ data: MovieListType; innerRef?: (node?: Element | null | undefined) => void }> = ({
	data,
	innerRef
}) => {
	const router = useRouter();
	const [Fav, setFav] = useState<boolean>(false);

	const handleNavigateToMovieDetails = useNavigateToMovieDetailsPage();

	useEffect(() => {
		setFav(isFavorite(data.id));
	}, [data.id]);

	const favClicked = () => {
		toggleFavorite(data);
		setFav(!Fav);
	};

	const handleMovieClick = () => {
		handleNavigateToMovieDetails(data.id);
	};

	return (
		<div className={styles.cardWrapper} ref={innerRef}>
			<div className={styles.cardContent}>
				<div className={styles.cardRating}>
					<StarIcon />
					<span>{data.voteAverage}</span>
				</div>

				<div onClick={handleMovieClick} className={`${styles.cardImage} image`}>
					<Image
						className={styles.img}
						src={`${appConfig.posterUrl}${data.posterPath}`}
						alt="poster"
						width={500}
						height={750}
					/>
				</div>

				<div className={styles.cardInfo}>
					{/* TODO:  Add link when clicked on the title*/}
					<div className={styles.cardDetails}>
						<Link aria-current={router.pathname === "404" ? "page" : undefined} href={`${appConfig.routesMap.movieDetails}/${data.id}`} className={styles.title}>
							{data.title || data.originalTitle}
						</Link>

						<p>{data.releaseDate}</p>
					</div>
					<div className={styles.favIcon} onClick={favClicked}>
						{Fav ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
					</div>
				</div>
			</div>
		</div>
	);
};
