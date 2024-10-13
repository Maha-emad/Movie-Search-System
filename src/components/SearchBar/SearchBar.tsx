import { TextField } from '@mui/material';
import styles from './SearchBar.module.scss';
import SearchIcon from '@/assets/images/Search.svg';
import { useSearchStore } from '@/providers/SearchStoreProvider';
import { ChangeEventHandler } from 'react';

export const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
	const { setSearchTerm } = useSearchStore((state) => state);

	const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (e) =>
		setSearchTerm(e.target.value);

	return (
		<div className={styles.inputGroup}>
			<div className={`${styles.leftIcon} ${styles.iconWrapper}`}>
				<SearchIcon />
			</div>
			<TextField 
			    aria-required="true"
				className={className}
				id="SearchBar"
				label="Search movies or tv shows"
				placeholder="eg. Avenger"
				variant="standard"
				margin="normal"
				onChange={onChange}
				fullWidth
				required
				slotProps={{
					input: {
						disableUnderline: true
					}
				}}
			/>
		</div>
	);
};
