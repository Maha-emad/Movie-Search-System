import Head from 'next/head';
import { HTMLHeaderProps } from './types';

const HTMLHeader = ({ title, children }: HTMLHeaderProps): JSX.Element => (
	<Head>
		<title>{title}</title>
		<meta name="description" content="Movie list" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
		{children}
	</Head>
);

export default HTMLHeader;
