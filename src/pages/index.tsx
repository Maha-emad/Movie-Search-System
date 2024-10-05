import HTMLHeader from '@/components/HTMLHeader';
import React from 'react';
import { HomeTemplate } from '@/components/Layouts';

const Index = (): JSX.Element => (
	<>
		<HTMLHeader title="Home Page" />
		<HomeTemplate>
			<div></div>
		</HomeTemplate>
	</>
);

export default Index;

Index.getLayout = (page: React.ReactElement) => <>{page}</>;
