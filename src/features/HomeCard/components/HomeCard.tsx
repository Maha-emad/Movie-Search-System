import { MovieCard } from "@/features/MovieCard";
import styles from "./HomeCard.module.scss";
import { SearchBar } from "@/components/SearchBar";
import { useGetMoviesList } from "../hooks/useMoviesList";
import { Button, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMovieStore } from "@/providers/MovieStoreProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { appConfig } from "@/config";
import { Error404 } from "@/components/Error404";
import { NotificationType } from "@/store/useNotificationStore";

export const HomeCard: React.FC = () => {
	const router = useRouter();
	const { fetchMovie, error, isError } = useGetMoviesList();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const { getList } = useMovieStore((state) => state);
	const data = getList();

	if (isError) {
		return <Error404 />;
	}

	useEffect(() => {
		fetchMovie(currentPage);
	}, [currentPage]);

	const next = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handleOnSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.replace(appConfig.routesMap.searchPage``);
	};

	return (
		<>
			<div className={`${styles.index} page container`}>
				<div className={styles.header}>
					<h1>M_flicks</h1>
					<form onSubmit={handleOnSubmit} className={styles.searchWrapper}>
						<SearchBar />
						<Button aria-label="Search" type="submit" size="medium" variant="contained" className={styles.btn}>
							Search
						</Button>
					</form>
				</div>
				<InfiniteScroll
					className={`container listGrid`}
					dataLength={data.length}
					hasMore={true}
					next={next}
					loader={<CircularProgress />}
					endMessage={
						<p style={{ textAlign: "center" }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{data.map((movie, index) => (
						<div key={index}>
							<MovieCard data={movie} />
						</div>
					))}
				</InfiniteScroll>
			</div>
		</>
	);
};
