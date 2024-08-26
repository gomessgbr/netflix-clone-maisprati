import { NavBar } from "../../components";
import { MovieList } from "./components/MovieList";
import { useGetMovies } from "./hooks/useGetMovies";

export function Home() {
  const { movies } = useGetMovies();

  return (
    <div className="bg-black min-h-screen min-w-[100dvw] ">
      <NavBar />
      <div className="pb-40">
        <MovieList title={"Tendencia agora!"} data={movies} />
      </div>
    </div>
  );
}
