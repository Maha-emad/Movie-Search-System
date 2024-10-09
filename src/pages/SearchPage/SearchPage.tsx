import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MovieCard } from '@/components/MovieCard';
import styles from './HomeTemplate.module.scss';
import Link from 'next/link';
import { SearchBar } from '@components/Layouts/SearchBar';

const SearchPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={`${styles.index} page container`}>
				<div className={styles.header}>
					<h1>MaileHereko</h1>
					<p>
						List of movies and TV Shows, I,
						<Link
							href="https://pramodpoudel.com.np"
							className={styles.externalLinks}
							target="_blank"
							aria-label="Know more about pramod poudel"
						>
							Pramod Poudel
						</Link>
						have watched till date. Explore what I have watched and also feel free to make a
						<Link href="#" className={styles.externalLinks}>
							suggestion.
						</Link>
					</p>
					<div className={styles.searchWrapper}>
						<SearchBar />
					</div>
				</div>
				<div className={`container listGrid`}>
					<MovieCard />
				</div>
			</div>

			<Footer />
		</>
	);
};


