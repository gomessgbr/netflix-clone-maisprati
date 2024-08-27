import { useEffect, useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchMovies = async (
    searchQuery = "",
    pageNumber = 1,
    reset = false
  ) => {
    const url = searchQuery
      ? `search/movie?query=${searchQuery}&include_adult=false&language=pt-BR&page=${pageNumber}`
      : `movie/top_rated?language=pt-BR&page=${pageNumber}`;

    try {
      setLoading(true);
      const response = await requestClient("get", url);

      if (!response.results) return;
      if (reset) {
        setMovies(response.results);
        setPage(1);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.results]);
        setPage(pageNumber);
      }
    } catch (error) {
      console.error("Error fetching movies ", error);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = (newQuery) => {
    setQuery(newQuery);
    fetchMovies(newQuery, 1, true);
  };

  const loadMoreMovies = () => {
    fetchMovies(query, page + 1);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    query,
    page,
    fetchMovies,
    searchMovies,
    loadMoreMovies,
  };
}
