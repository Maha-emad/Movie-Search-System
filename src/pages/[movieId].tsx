import { Metadata } from 'next';
import { appConfig } from '@/config';
import HTMLHeader from '@/components/HTMLHeader';
import { MovieDetails } from '@/features';
import { useGetMovieByIdQuery } from '@/hooks/useGetMovieByIdQuyery';

type Props = {
	params: { movieId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {data} = useGetMovieByIdQuery();

  if(!data){
    throw new Error('Movie not found');
  }

	return {
		title: `${data.title} - `,
		description: data.overview,
		keywords: `movies to watch`
	};
}

export default function MoviePage(): JSX.Element {
	return (
		<>
			<HTMLHeader />
			<MovieDetails />
		</>
	);
}

MoviePage.getLayout = (page: React.ReactElement) => <>{page}</>;
