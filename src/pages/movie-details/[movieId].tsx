import { Metadata } from 'next';
import HTMLHeader from '@/components/HTMLHeader';
import { useGetMovieByIdQuery } from '@/features/MovieDetails/hooks/useGetMovieByIdQuery';
import { Layout, MovieTemplate } from '@/components/Layouts';

export async function generateMetadata(): Promise<Metadata> {
	const { movie } = useGetMovieByIdQuery();

	if (!movie) {
		throw new Error('Movie not found');
	}

	return {
		title: `${movie.title} - `,
		description: movie.overview,
		keywords: `movies to watch`
	};
}

export default function MoviePage(): JSX.Element {
	return (
		<>
			<HTMLHeader />
			<MovieTemplate />
		</>
	);
}

MoviePage.getLayout = (page: React.ReactElement) => (
	<>
		<Layout>{page}</Layout>
	</>
);
