// import { FavButton } from '@/components/FavButton';
import Link from 'next/link';
// import Logo from '@/assets/images/Logo.svg';
// import PageCover from '@/assets/images/DetailsPageCover.svg';
import PagePoster from '@/assets/images/DetailsPagePoster.svg';
import styles from './DetailsBanner.module.scss';
// import StarIcon from '@/components/StarIcon';


export const DetailsBanner: React.FC = () => {
	return (
		<div className={styles.detailsHeader}>
			<div className={`${styles.banner} image`}>
				<PagePoster />
			</div>

			<div className={`${styles.headerTitleContainer} bgBlur`}>
				<div className="breadcrumb-container">
					<Link href="/" className="breadcrumb-link-item">
						M_Flicks
					</Link>
					<p className="small breadcrumb-seperator">/</p>
					<Link className="breadcrumb-link-item" href="/search">
						Movies
					</Link>
				</div>
			</div>

			<h1 className={styles.title}> movie title </h1>
		</div>
	);
};
