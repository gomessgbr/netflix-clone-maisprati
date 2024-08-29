/* eslint-disable react/prop-types */

import { createPortal } from "react-dom";

export function Modal({ open, data, image, onClose }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={handleOverlayClick}
    >
      <dialog
        open={open}
        className="bg-neutral-950 rounded-lg p-6 min-h-96 max-w-4xl w-full max-h-screen overflow-auto border-none text-white"
      >
        {!!data && (
          <div className="flex flex-col items-center">
            {image && (
              <img
                src={`https://image.tmdb.org/t/p/w300/${image.file_path}`}
                alt="poster"
                className="max-w-fit object-cover"
              />
            )}
            <div className="text-center p-10">
              <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
              <p className="text-lg mb-6">{data.overview}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center">
          <span>Sem dados desse filme</span>
        </div>
      </dialog>
    </div>,
    document.body
  );
}
