import { FavButton } from '@/components/FavButton';
import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg';
import styles from './Header.module.scss';


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
				</div> 
               
			   <div className={`${styles.logoContent}`}>
               <Link href="#" className={styles.navLink}>
                <span>Movie Search</span>
              </Link>
				
				<Link href="#">
				<FavButton/> 
				</Link>
			   </div>
				
			</div>
		</nav>
	);
};
