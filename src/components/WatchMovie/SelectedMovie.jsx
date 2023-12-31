import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StarRating from "../StarRating/StarRating";

const SelectedMovie = ({
  selectedID,
  onRemoveID,
  onAddWatchMovieList,
  watchMovieList,
}) => {
  const [movie, setMovie] = useState({});
  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const apikey = import.meta.env.VITE_OMDB_API_KEY;
  const handleRate = (i) => {
    setRate(i);
  };
  const addMovieList = () => {
    onAddWatchMovieList({
      id: movie.imdbID,
      image: movie.Poster,
      title: movie.Title,
      imdbRating: Number(movie.imdbRating),
      rate,
      time: Number(movie.Runtime.split(" ")[0]),
    });
  };

  const ratedMovie = watchMovieList
    .map((movie) => movie.id)
    .includes(selectedID);
  useEffect(() => {
    setIsLoading(true);
    const fetchSelectedMovie = async () => {
      let req = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&i=${selectedID}`
      );
      let res = await req.json();
      setMovie(res);
      setIsLoading(false);
      setRate(0);
    };
    fetchSelectedMovie();
  }, [selectedID]);
  useEffect(() => {
    document.title = `MOVIE | ${movie.Title}`;
  }, [movie.Title]);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center mt-20">
          <h2 className="text-2xl text-white">Loading ......</h2>
        </div>
      ) : (
        <div className="text-white relative">
          <button
            className="absolute bg-black rounded-full w-10 h-10 text-3xl"
            onClick={onRemoveID}
          >
            &larr;
          </button>
          <div className="flex gap-5 bg-slate-600 ">
            {movie.Poster === "N/A" ? (
              <div className="w-[250px] h-[300px] bg-black"></div>
            ) : (
              <img src={movie.Poster} alt={movie.Title} className="h-[300px]" />
            )}
            <div className="flex flex-col mt-10 gap-5">
              <h2 className="text-3xl font-bold">{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}s
              </p>
              <p>{movie.Genre}</p>
              <p>⭐ {movie.imdbRating} IMDBRating</p>
            </div>
          </div>
          <div className="p-5">
            <div className="shadow-lg p-5 rounded-lg bg-slate-600 mb-5">
              <>
                {ratedMovie ? (
                  <p className="text-center font-bold text-xl">You are Rated</p>
                ) : (
                  <>
                    <StarRating maxLen={10} onClick={handleRate} rate={rate} />
                    {rate > 0 && (
                      <button
                        className="mt-3 font-bold bg-purple-500 px-5 py-2 rounded-lg mx-auto block"
                        onClick={addMovieList}
                      >
                        +Add To List
                      </button>
                    )}
                  </>
                )}
              </>
            </div>
            <em>{movie.Plot}</em>
            <p className="my-5">{movie.Actors}</p>
            <p>
              Directed By{" "}
              {movie.Director === "N/A" ? "Unknown" : movie.Director}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedMovie;
