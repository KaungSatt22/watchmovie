import React from "react";

const WatchList = ({ watchMovieList, onRemoveWatchMovieList }) => {
  return (
    <div>
      {watchMovieList.map((movie) => (
        <div
          key={movie.id}
          className="flex gap-5 items-center text-white p-10 shadow-lg"
        >
          <img src={movie.image} className="w-[50px]" />
          <div className=" w-full">
            <h2 className="font-bold text-xl mb-5">{movie.title}</h2>
            <div className="flex justify-between ">
              <p>⭐ {movie.rate}</p>
              <p>🌟 {movie.imdbRating}</p>
              <p>⌛ {movie.time}mins</p>
            </div>
          </div>
          <button
            className="ml-5"
            onClick={() => onRemoveWatchMovieList(movie.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
