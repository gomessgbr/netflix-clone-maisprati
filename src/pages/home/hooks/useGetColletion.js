import { useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetCollection() {
  const [moviesCollection, setMoviesCollection] = useState();

  const getColletion = async (query) => {
    try {
      const response = await requestClient(
        "get",
        `/search/collection?query=${query}&include_adult=false&language=pt-BR&page=1`
      );

      setMoviesCollection(response.results);
    } catch (error) {
      console.error("Error colletion movie image: ", error);
    }
  };

  return {
    moviesCollection,
    getColletion,
  };
}
