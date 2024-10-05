import CoverImg from '@/assets/images/Cover.svg';
import Image from 'next/image';
import React from 'react';

export const Cover: React.FC = () => {
	return (
		<div>
			<Image src={CoverImg} alt="Cover Image" loading="lazy" />
		</div>
	);
};

export default Cover;
