'use client';
import { FavButton } from '@/components/FavButton';
import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg';
import styles from './Header.module.scss';
import { Typography } from '@mui/material';

export const Header: React.FC = () => {
	return (
		<nav className={`${styles.bgBlur} ${styles.nav}`}>
			<div className={`${styles.navbar} container`}>
				<div className={`${styles.logoContent}`}>
					<div className={styles.brand}>
						<Link href="/">
							<Logo />
						</Link>
					</div>

					<div>
						<Typography variant="h3">M Flicks</Typography>
					</div>
				</div>

				<Link href="#">
					<FavButton />
				</Link>
			</div>
		</nav>
	);
};
