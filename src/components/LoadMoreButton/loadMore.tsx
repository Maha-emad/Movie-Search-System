import { Button } from '@mui/material';
import styles from './loadMore.module.scss';

const LoadMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<Button variant="contained" className={styles.btn} onClick={onClick}>
			Load More
		</Button>
	);
};

export { LoadMoreButton };
