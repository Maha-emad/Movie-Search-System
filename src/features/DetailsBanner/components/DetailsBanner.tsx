'use client'
import Link from 'next/link';
import styles from './DetailsBanner.module.scss';
import Image from 'next/image';
import { appConfig } from '@/config';
import { useRouter } from 'next/router';

export const DetailsBanner: React.FC<{
	movieTitle: string;
	originalTitle: string;
	originalName: string;
	backdropPath: string;
}> = ({ movieTitle, originalTitle, originalName, backdropPath }) => {
	const router = useRouter();
	return (
		<div className={styles.detailsHeader}>
			<div className={`${styles.banner} image`}>
				<Image
					src={`${appConfig.backDropUrl}${backdropPath}`}
					alt={originalTitle || originalName}
					width={1280}
					height={720} 
					className={styles.img}
				/>
			</div>

			<div className={`${styles.headerTitleContainer} bgBlur`}>
				<div className="breadcrumb-container">
					<Link aria-current={router.pathname === "404" ? "page" : undefined} href="/" className="breadcrumb-link-item">
						M_Flicks
					</Link>
					<p aria-current={router.pathname === "404" ? "page" : undefined} className="small breadcrumb-seperator">/</p>
					<Link aria-current={router.pathname === "404" ? "page" : undefined} className="breadcrumb-link-item" href="/search">
						Movies
					</Link>
				</div>
				<h1 className={styles.title}> {movieTitle}</h1>
			</div>
		</div>
	);
};
