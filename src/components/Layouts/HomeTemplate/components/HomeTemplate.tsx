// import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
// import { MovieCard } from '@/components/MovieCard';
// import styles from './HomeTemplate.module.scss';
// import Link from 'next/link';
// import { FavList } from '@components/FavList'; 
import { MovieDetails } from '@components/MovieDetails';
import { DetailsBanner } from '@components/DetailsBanner';
const HomeTemplate: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<>
			{/* <Header /> */}  
			<DetailsBanner/>

			<MovieDetails/>
			<Footer />
		</>
	);
};

export default HomeTemplate;
