import { useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async (type) => {
      if(type){
        try {
          const response = await requestClient(
            "get",
            `movie/${type}?language=pt-BR&page=1`
          );
          setMovies(response.results);
        } catch (error) {
          console.error("Error fetching movie image: ", error);
        }

      }
  };



  return {
    movies,
    getMovies,
  };
}
