import { useEffect, useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await requestClient(
        "get",
        "3/movie/popular?language=pt-BR&page=1"
      );
      setMovies(response);
    } catch (error) {
      console.error("Error fetching movie image: ", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
  };
}
