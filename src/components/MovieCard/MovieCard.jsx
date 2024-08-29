import { useState } from "react";
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails";
import { useGetMovieImage } from "../../pages/home/hooks/useGetMovieImage";
import { Modal } from "../Modal/Modal";




/* eslint-disable react/prop-types */
export function MovieCard({ title, url, id }) {
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
      className="cursor-pointer rounded-lg "
      onClick={handleClick}
    >
      <div className="relative">
        <p className="absolute text-slate-200 top-0 p-4">{title}</p>
      </div>
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
