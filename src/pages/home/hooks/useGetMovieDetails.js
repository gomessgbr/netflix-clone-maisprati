import { useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovieDetails() {
  const [details, setDetails] = useState([]);

  const getDetails = async (idMovie) => {
    try {
      const response = await requestClient(
        "get",
        `movie/${idMovie}?language=pt-BR`
      );
      setDetails(response);
    } catch (error) {
      console.error("Error fetching movie image: ", error);
    }
  };

  return {
    details,
    getDetails,
  };
}
