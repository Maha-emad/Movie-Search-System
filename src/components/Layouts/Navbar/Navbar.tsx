import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg';
import styles from './Navbar.module.scss';
import FavIcon from '@/assets/images/FavIcon.svg';

export const Navbar: React.FC = () => {
	return (
		<nav className={`${styles.bgBlur} ${styles.nav}`}>
			<div className={`${styles.navbar} container`}>
				<div className={`${styles.logoContent}`}>
					<div className={styles.brand}>
						<Link href="/">
							<Logo />
						</Link>
					</div>
				</div>

				<div className={`${styles.logoContent}`}>
					{/* <Link href="#" className={styles.navLink}>
						<span>Movie Search</span>
					</Link> */}

					<Link href="/favListPage">
						<FavIcon />
					</Link>
				</div>
			</div>
		</nav>
	);
};
