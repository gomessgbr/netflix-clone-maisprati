import { useGetMovies } from "./hooks/useGetMovies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { NavBar } from "../../components";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export function Movies() {
  const { movies, loading, searchMovies, loadMoreMovies } = useGetMovies();
  const { observerRef } = useInfiniteScroll(loadMoreMovies, loading);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    searchMovies(searchQuery);
  };
  return (
    <div className="bg-black min-h-screen min-w-[100dvw]">
      <NavBar onSearch={handleSearch} />

      <div className="px-[4%]">
        <h3 className="text-xl text-white px-4 py-2">Filmes</h3>
        {loading && <p className="text-white">Loading...</p>}
        <div className="grid grid-rows-* grid-cols-6 gap-4">
          {!!movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                url={movie.backdrop_path}
              />
            ))}
        </div>

        <div ref={observerRef} style={{ height: "1px" }}></div>
      </div>
    </div>
  );
}
