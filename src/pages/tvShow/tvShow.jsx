import { useEffect, useState } from "react";
import { useGetTvShows } from "./hooks/useGetTvShows";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { NavBar } from "../../components";

export function TvShow() {
  const [searchQuery, setSearchQuery] = useState("");
  const { tvShow, fetchNextPage, hasNextPage, page } =
    useGetTvShows(searchQuery);

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
    <div className="bg-black min-h-screen min-w-[100dvw]">
      <NavBar onSearch={handleSearch} />

      <div className="px-[4%]">
        <h3 className="text-xl text-white px-4 py-2">Séries</h3>
        <div className="grid grid-rows-* lg:grid-cols-6 gap-4">
          {tvShow.length > 0 &&
            tvShow.map((serie) => (
              <MovieCard
                key={serie.id}
                id={serie.id}
                title={serie.title}
                url={serie.backdrop_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
