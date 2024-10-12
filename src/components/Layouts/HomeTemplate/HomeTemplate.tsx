import { Navbar } from '@/components/Layouts/Navbar';
import { Footer } from '@/components/Footer';
import { SearchCard } from '@/features/SearchCard/components/SearchCard';

const HomeTemplate: React.FC = () => {
	return (
		<>
			<Navbar />
			<SearchCard />
			<Footer />
		</>
	);
};

export default HomeTemplate;
