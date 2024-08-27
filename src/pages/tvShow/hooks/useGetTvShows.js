import { useEffect, useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetTvShows() {
  const [tvShow, setTvShow] = useState([]);

  const getTvShows = async (query, page = 1) => {
    const url = query
      ? `search/tv?query=${query}&include_adult=false&language=pt-BR&page=${page}`
      : `tv/top_rated?language=pt-BR&page=${page}`;
    try {
      const response = await requestClient("get", url);
      setTvShow(response.results);
    } catch (error) {
      console.error("Error fetching tv shows ", error);
    }
  };

  
  return {  tvShow, getTvShows };
}
