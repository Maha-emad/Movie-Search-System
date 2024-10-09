import { TextField } from '@mui/material';
import styles from './SearchBar.module.scss';
import SearchIcon from '@/assets/images/Search.svg';

export const SearchBar = () => {
	return (
		<div className={styles.inputGroup}>
			<div className={`${styles.leftIcon} ${styles.iconWrapper}`}>
				<SearchIcon />
			</div>
			<TextField
				id="SearchBar"
				label="Search movies or tv shows"
				placeholder="eg. Avenger"
				variant="standard"
				margin="normal"
				fullWidth
				slotProps={{
					input: {
						disableUnderline: true
					}
				}}
			/>
		</div>
	);
};
