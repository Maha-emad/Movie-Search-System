import CoverImg from '@/assets/images/homeImg.svg';
import Image from 'next/image';
import React from 'react';

export const Cover: React.FC = () => {
	return (
		<div>
			<Image src={CoverImg} alt="Cover Image"  />
		</div>
	);
};

export default Cover;

