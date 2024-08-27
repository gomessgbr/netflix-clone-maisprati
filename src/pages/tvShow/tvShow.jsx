import { useEffect } from "react";
import { useGetTvShows } from "./hooks/useGetTvShows"
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { NavBar } from "../../components";

export function TvShow(){
  const {getTvShows, tvShow} = useGetTvShows();

  useEffect(()=>{
    getTvShows("", 1);
  },[])
  return (
    <div className="bg-black min-h-screen min-w-[100dvw]">
      <NavBar  />

      <div className="px-[4%]">
        <h3 className="text-xl text-white px-4 py-2">Séries</h3>
        {/* {loading && <p className="text-white">Loading...</p>} */}
        <div className="grid grid-rows-* grid-cols-6 gap-4">
          {!!tvShow &&
            tvShow.map((serie) => (
              <MovieCard
                key={serie.id}
                id={serie.id}
                title={serie.title}
                url={serie.backdrop_path}
              />
            ))}
        </div>

        {/* <div ref={observerRef} style={{ height: "1px" }}></div> */}
      </div>
    </div>
  )
}