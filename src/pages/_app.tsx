import "@/assets/scss/global.scss";
import "@/assets/scss/mFlicks.scss";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { NotificationStoreProvider, MovieStoreProvider, SearchStoreProvider } from "@/providers";
import NotificationBar from "@/components/NotificationBar/NotificationBar";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function RootLayout({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<NotificationStoreProvider>
			<MovieStoreProvider>
				<SearchStoreProvider>
					<AppRouterCacheProvider>
						<NotificationBar />
						{getLayout(<Component {...pageProps} />)}
					</AppRouterCacheProvider>
				</SearchStoreProvider>
			</MovieStoreProvider>
		</NotificationStoreProvider>
	);
}
