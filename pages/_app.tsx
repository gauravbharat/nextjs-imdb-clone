import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Movie DB</title>
        <meta
          name="description"
          content="Browse trending and top rated movie collection from TMDB"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
