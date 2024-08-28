import { useInfiniteQuery } from "@tanstack/react-query";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovies(searchQuery = "") {
  const fetchMovies = async ({ pageParam = 1 }) => {
    const url = searchQuery
      ? `search/movie?query=${searchQuery}&include_adult=false&language=pt-BR&page=${pageParam}`
      : `movie/top_rated?language=pt-BR&page=${pageParam}`;

    const response = await requestClient("get", url);
    return response;
  };

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["moviesPage", searchQuery],
      queryFn: fetchMovies,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return nextPage <= 10 ? nextPage : undefined;
      },
    });



  return {
    movies: data?.pages.flatMap((page) => page.results) || [],
    loading: isLoading,
    hasNextPage,
    refetch,
    fetchNextPage,
    page: data?.pages.length,
  };
}
