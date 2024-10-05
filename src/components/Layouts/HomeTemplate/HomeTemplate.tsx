import { Header } from '@/components/Header'; 
import {Cover} from '@/components/Cover'

const HomeTemplate: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<div>
				<Header /> 
				<Cover/>
			</div>
		</>
	);
};

export default HomeTemplate;
