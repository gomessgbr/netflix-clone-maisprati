import { useState } from "react";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
import { Modal } from "../../../components";
import { useGetMovieImage } from "../hooks/useGetMovieImage";

/* eslint-disable react/prop-types */
export function MovieCard({ url, id }) {
  const { details, getDetails } = useGetMovieDetails();
  const { getImage, image } = useGetMovieImage();
  const [showModal, setShowModal] = useState(false);

  const handleClick = async () => {
    if (!showModal) {
      await getDetails(id);
      await getImage(id);
      setShowModal(true);
    }
  };

  return (
    <div
      className="cursor-pointer rounded-lg overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300/${url}`}
        alt=""
        className="w-full h-auto"
      />
      <Modal
        open={showModal}
        data={details}
        image={image}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
}
