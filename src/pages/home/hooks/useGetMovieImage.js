import { useState } from "react";
import { requestClient } from "../../../service/api/requestClient";

export function useGetMovieImage() {
  const [image, setImage] = useState();

  const getImage = async (idMovie) => {
    try {
      const response = await requestClient(
        "get",
        `movie/${idMovie}/images?include_image_language=pt&language=pt-BR`
      );
      if (response.posters.length > 0) {
        console.log('teste')
        setImage(response.posters[0]);
      }
    } catch (error) {
      console.error("Error fetching movie image: ", error);
    }
  };

  return {
    image,
    getImage
  };
}
