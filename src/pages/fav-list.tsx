import HTMLHeader from '@/components/HTMLHeader';
import { Layout, FavListTemplate } from '@/components/Layouts';
import { FavList } from '@/features';
import React from 'react';

const FavListPage = (): JSX.Element => (
	<>
		<HTMLHeader title="Favorite Page" /> 
		
		<FavListTemplate />
	</>
);

export default FavList;

FavListPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
