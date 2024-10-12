import HTMLHeader from '@/components/HTMLHeader';
import { FavList } from '@/features';
import React from 'react';

const Index = (): JSX.Element => (
	<>
		<HTMLHeader title="Favorite Page" />
		<FavList />
	</>
);

export default Index;

Index.getLayout = (page: React.ReactElement) => <>{page}</>;
