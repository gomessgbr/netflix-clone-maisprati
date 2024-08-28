import { useInfiniteQuery } from "@tanstack/react-query";
import { requestClient } from "../../../service/api/requestClient";

export function useGetTvShows(searchQuery = "") {
  const fetchTvShows = async ({ pageParam = 1 }) => {
    const url = searchQuery
      ? `search/tv?query=${searchQuery}&include_adult=false&language=pt-BR&page=${pageParam}`
      : `tv/top_rated?language=pt-BR&page=${pageParam}`;

    const response = await requestClient("get", url);
    return response;
  };

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["tvShowsPage", searchQuery],
    queryFn: fetchTvShows,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= 10 ? nextPage : undefined;
    },
  });

  return {
    tvShow: data?.pages.flatMap((page) => page.results) || [],
    loading: isLoading,
    hasNextPage,
    fetchNextPage,
    page: data?.pages.length,
  };
}
