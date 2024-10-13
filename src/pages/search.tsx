import HTMLHeader from '@/components/HTMLHeader';
import { SearchCardTemplate, Layout } from '@/components/Layouts';
import React from 'react';

const SearchPage = (): JSX.Element => (
	<>
		<HTMLHeader title="Favorite Page" />
		<SearchCardTemplate />
	</>
);

export default SearchPage;

SearchPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
