import Link from 'next/link';
import Image from 'next/image';
import styles from './MovieCard.module.scss';
//import { Icon } from '@/components/Icon';
import StarIcon from '@/assets/images/StarIcon.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { MovieType } from '@/types';
import { appConfig } from '@/config';

export const MovieCard: React.FC<{data:MovieType, innerRef?: (node ?: Element | null | undefined) => void}> = ({data, innerRef
}) => {
	const [Fav, setFav] = useState<boolean>(false);

	const favClicked = () => {
		setFav((Fav) => !Fav);
	};

	return (
		<div className={styles.cardWrapper} ref={innerRef}>
			<div className={styles.cardContent}>
				<div className={styles.cardRating}>
					<StarIcon />
					<span>{data.voteAverage}</span>
				</div>

				<Link href={`/${data.id}`} className={`${styles.cardImage} image`}>
					<Image
						className={styles.img}
						src={`https://image.tmdb.org/t/p/w500${data.backdropPath}`}
						alt="poster"
						width={500}
						height={750}
					/>
				</Link>

				<div className={styles.cardInfo}>
					{/* TODO:  Add link when clicked on the title*/}
					<div className={styles.cardDetails}>
						<Link href="/" className={styles.title}>
							{data.title || data.originalTitle}
						</Link>

						<p>{data.releaseDate}</p>
					
					</div>
					<div className={styles.favIcon}>
						<Link href={`${appConfig.route}`} onClick={favClicked}>
							{Fav ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
