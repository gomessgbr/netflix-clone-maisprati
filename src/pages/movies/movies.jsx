import { useEffect, useState } from "react";
import { useGetMovies } from "./hooks/useGetMovies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { NavBar } from "../../components";

export function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, loading, fetchNextPage, hasNextPage, page } =
    useGetMovies(searchQuery);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (page === 1) {
      fetchNextPage();
    }
  }, [page]);

  return (
    <div className="bg-black min-h-screen min-w-[98dvw]">
      <NavBar onSearch={handleSearch} />
      <div className="px-[4%]">
        <h3 className="text-xl text-white px-4 py-2">Filmes</h3>
        <div className="grid grid-rows-* lg:grid-cols-6 gap-4">
          {movies.length > 0
            ? movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  url={movie.backdrop_path}
                />
              ))
            : !loading && (
                <p className="text-white">Nenhum filme encontrado.</p>
              )}
        </div>
      </div>
    </div>
  );
}
