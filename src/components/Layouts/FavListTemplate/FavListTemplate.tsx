import { FavList } from "@/features";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FavListTemplate: React.FC = () => {
	return (
		<>
			<Navbar />
			<FavList />
			<Footer />
		</>
	);
};

export default FavListTemplate;
