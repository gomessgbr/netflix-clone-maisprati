import { useState } from "react";
import { NavBar } from "../../components";
import { MovieList } from "./components/MovieList";
import { useGetMovies } from "./hooks/useGetMovies";
import { useGetCollection } from "./hooks/useGetColletion";
import { MovieCard } from "./components/MovieCard";

export function Home() {
  const [query, setQuery] = useState("");
  const { movies } = useGetMovies();
  const { getColletion, moviesCollection } = useGetCollection();

  const onSearch = (e) => {
    const inputSearchValue = e.target.value;
    getColletion(inputSearchValue);
    setQuery(inputSearchValue);
  };

  return (
    <div className="bg-black min-h-screen min-w-[100dvw] ">
      <NavBar onSearch={onSearch} />
      <></>
      {query === "" && (
        <div className="pb-40">
          <MovieList title={"Tendencia agora!"} data={movies} />
        </div>
      )}
      {query !== "" && (
        <div className="grid grid-rows-* grid-cols-6 gap-4">
          {moviesCollection &&
            moviesCollection.map((movie) => (
              <MovieCard
                key={movie.id}
                url={movie.backdrop_path}
                id={movie.id}
                title={movie.name}
              />
            ))}
            {
              !moviesCollection && <p>Não encontrados</p>
            }
        </div>
      )}
    </div>
  );
}
