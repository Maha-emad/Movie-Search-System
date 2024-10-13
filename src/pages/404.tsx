import { Error404 } from '@/components/Error404';
import HTMLHeader from '@/components/HTMLHeader';
import { Layout } from '@/components/Layouts';
import React from 'react';

const Error404Page = (): JSX.Element => (
	<>
		<HTMLHeader title="Favorite Page" />
		<Error404/>
	</>
);

export default Error404Page;

Error404Page.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
