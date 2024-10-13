import { appConfig } from "@/config";
import { useMovieStore } from "@/providers/MovieStoreProvider";
import { useNotificationStore } from "@/providers/NotificationStoreProvider";
import { NotificationType } from "@/store/useNotificationStore";
import { MovieApiType, MovieListType } from "@/types";
import { parsMovieList } from "@/utils";
import axios from "axios";
import { useState } from "react";
type AxiosMovieList = {
	page: number;
	results: MovieApiType[];
};
export const useGetMoviesList = () => {
	const { showNotification } = useNotificationStore((state) => state);
	const { setLoading, setList } = useMovieStore((state) => state);
	const [isError, setIsError] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const fetchData = async (page: number) => {
		setLoading(true);

		try {
			const url = `${appConfig.baseUrl}/discover/movie`;
			const options = {
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${appConfig.api_token}`
				},
				params: {
					language: "en-US",
					page
				}
			};
			const resMovie: MovieApiType[] = (await axios.get<AxiosMovieList>(url, options)).data.results;
			const parsedMovie: MovieListType[] = resMovie.map((movie) => parsMovieList(movie));

			setList(parsedMovie);
			setIsError(false);
			setError("");
		} catch (err: any) {
			setIsError(true);
			setError(err.message);
			setLoading(false);
		}
	};

	return { fetchMovie: fetchData, isError, error };
};
