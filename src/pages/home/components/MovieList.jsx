import { MovieCard } from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable react/prop-types */
export function MovieList({ data, title }) {
  const { results } = data;
  if (!results) {
    return null;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 text-white">
      <div>
        <p className="text-lg font-semibold mb-4">{title}</p>
        <Slider {...settings}>
          {results.map((movie) => (
            <MovieCard key={movie.id.toString()} url={movie.backdrop_path} id={movie.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
