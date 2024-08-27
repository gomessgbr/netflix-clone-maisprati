import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGetMovies } from "../hooks/useGetMovies";
import { ChevronLeft, ChevronRight } from "lucide-react";

const typesMovies = {
  upcoming: "Em Breve",
  top_rated: "Bem Avaliados",
  popular: "Tendências",
  now_playing: "Em Cartaz",
};

/* eslint-disable react/prop-types */
export function MovieList({ title }) {
  const { movies, getMovies } = useGetMovies();

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer "
        onClick={onClick}
      >
        <ChevronRight />
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <ChevronLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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

  useEffect(() => {
    const typeKey = Object.keys(typesMovies).find(
      (key) => typesMovies[key] === title
    );
    getMovies(typeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <div className=" mt-4 space-y-8 text-white">
      <div className="w-full max-w-full overflow-hidden">
        <p className="text-lg font-semibold mb-4 mx-4">{title}</p>
        <Slider {...settings}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                url={movie.backdrop_path}
                id={movie.id}
                title={movie.title}
              />
            ))}
          {!movies && (
            <div>
              <p>Problemas ao carregar seus filmes, desculpe</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}
