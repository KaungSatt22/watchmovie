import React from "react";

const Summary = ({ watchMovieList }) => {
  const averageFun = (arr) => {
    if (!arr.length) {
      return 0;
    }
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };
  const totalWatchMovies = watchMovieList.length;
  const averageIMDBRating = averageFun(
    watchMovieList.map((movie) => movie.imdbRating)
  );
  const averageUserRating = averageFun(
    watchMovieList.map((movie) => movie.rate)
  );
  const averageDuration = averageFun(watchMovieList.map((movie) => movie.time));
  return (
    <div className="shadow-lg p-10 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-3">MOVIE YOU WATCHED</h2>
      <div className="flex justify-between items-center">
        <div>
          <p>🍿 {totalWatchMovies} movies</p>
        </div>
        <div>
          <p>⭐ {averageUserRating.toFixed(2)}</p>
        </div>
        <div>
          <p>🌟 {averageIMDBRating.toFixed(2)}</p>
        </div>
        <div>
          <p>⌛ {averageDuration.toFixed(2)} mins</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
