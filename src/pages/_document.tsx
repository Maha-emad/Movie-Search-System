import { Html, Head, Main, NextScript } from 'next/document';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export default function Document() {
	return (
		<Html>
			<AppRouterCacheProvider>

			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
			</AppRouterCacheProvider>
		</Html>
	);
}
