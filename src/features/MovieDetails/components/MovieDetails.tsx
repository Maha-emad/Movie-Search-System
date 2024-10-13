import styles from './MovieDetails.module.scss';
import StarIcon from '@/assets/images/StarIcon.svg';
import { appConfig } from '@/config';
import { CircularProgress } from '@mui/material';
import { useGetMovieByIdQuery } from '../hooks/useGetMovieByIdQuery';
import { DetailsBanner } from '@/features/DetailsBanner';
import Image from 'next/image';

export const MovieDetails: React.FC = () => {
	const { movie, isLoading, isError, error } = useGetMovieByIdQuery();

	if (isLoading) {
		return <CircularProgress />;
	}

	if (isError || !movie) {
		return <CircularProgress />;
	}

	return (
		<div className=" page container">
            <DetailsBanner
				movieTitle={movie.title}
				originalTitle={movie.originalTitle}
				originalName={movie.originalName}
				backdropPath={movie.backdropPath}
			/>
			<div className={styles.detailsWrapper}>
				<div className={`${styles.poster}`}>
					<Image src={`${appConfig.posterUrl}${movie.posterPath}`} alt="poster" width={500} height={750} />
				</div>

				<div className={styles.detailsContainer}>
					<div className={`tagline-container ${styles.detail}`}>
						<h4 className={styles.tagline}>{movie.tagline}</h4>
					</div>
					<div className={`description-container ${styles.detail}`}>
						<p className="large">{movie.overview}</p>
					</div>
					<div className={`${styles.rating} ${styles.detail}`}>
						<StarIcon />
						<p>{movie.voteAverage}</p>
					</div>

					<div className={`type-status ${styles.detailsRow}`}>
						<div className={`type ${styles.detail}`}>
							<p className="label">Director</p>
							<p className="large">{movie.director}</p>
						</div>
					</div>

					<div className={`dates ${styles.detailsRow}`}>
						<div className={`release-date ${styles.detail}`}>
							<p className="label">Release date</p>
							<p className="large">{movie.releaseDate}</p>
						</div>
					</div>
					<div className={`season-episodes ${styles.detailsRow}`}>
						<div className={`seasons ${styles.detail}`}>
							<p className="label">Cast</p>
							<p className="large">{movie.cast.toString()}</p>
						</div>
					</div>

					<div className={`${styles.runTime} ${styles.detail}`}>
						<p className="label">Run time</p>
						<p className="large">{movie.runtime} minutes</p>
					</div>
					<div className={`genre ${styles.detail}`}>
						<p className="label">Genres</p>
						<p className={styles.genreWrapper}>
							<p className="large">{movie.genres.join(', ')}</p>
						</p>
					</div>
				</div>
			</div>
		</div>
			
		
	);
};
