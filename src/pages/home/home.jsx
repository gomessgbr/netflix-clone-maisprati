import { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { MovieList } from "./components/MovieList";
// import { useGetMovies } from "./hooks/useGetMovies";
import { useGetCollection } from "./hooks/useGetColletion";
import { MovieCard } from "./components/MovieCard";
import trailer from "../../assets/trailer/sex-education.mp4";

// TODO - Fazer a parte das telas, quando clicar carregar cada uma das categorias da páginas
// TODO - Dar erro quando os inputs da tela de login forem vazios
// TODO - Deixar o NAVBAR responsivo
// TODO - Arrumar as dimensões do video

export function Home() {
  const [query, setQuery] = useState("");
  // const { movies } = useGetMovies();
  const { getColletion, moviesCollection } = useGetCollection();

  const onSearch = (e) => {
    const inputSearchValue = e.target.value;
    getColletion(inputSearchValue);
    setQuery(inputSearchValue);
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-black min-h-screen min-w-[100dvw]">
      <NavBar onSearch={onSearch} />

      {query === "" && (
        <>
          <div className="relative w-7xl h-[720px]  bg-black">
            <video className="absolute top-0 left-0 w-full h-full object-cover"  autoPlay muted loop>
              <source src={trailer} type="video/mp4" />
            </video>
          </div>
          <div className=" pb-40">
            <MovieList title={"Tendências"} />
            <MovieList title={"Bem Avaliados"} />
            <MovieList title={"Em Breve"} />
            <MovieList title={"Em Cartaz"} />
          </div>
        </>
      )}
      {query !== "" && (
        <div className="grid grid-rows-* grid-cols-6 gap-4">
          {moviesCollection &&
            moviesCollection.map((movie) => (
              <MovieCard
                key={movie.id.toString()}
                url={movie.backdrop_path}
                id={movie.id}
                title={movie.name}
              />
            ))}
          {!moviesCollection && <p>Não encontrados</p>}
        </div>
      )}
    </div>
  );
}
