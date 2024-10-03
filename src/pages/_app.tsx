import type { NextPage } from 'next';
import type { AppProps } from 'next/app'; 

// import "./globals.css";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function RootLayout({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    getLayout(<Component {...pageProps} />)
  );
}
