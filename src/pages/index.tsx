import HTMLHeader from '@/components/HTMLHeader';
import { Layout, HomeTemplate } from '@/components/Layouts';
import React from 'react';

const Index = (): JSX.Element => (
	<>
		<HTMLHeader title="Home Page" />
		<HomeTemplate />
	</>
);

export default Index;

Index.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
