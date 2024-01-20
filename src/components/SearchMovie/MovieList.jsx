import React from "react";
import Movie from "./Movie";

const MovieList = ({ searchMovies, onSelectedID, search }) => {
  return (
    <div className="h-full">
      {searchMovies?.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-3xl font-bold text-white">
            {search.length > 3
              ? `Sorry Can't find ${search} movie.`
              : "Let's Find Some MOVIES 🍿"}
          </p>
        </div>
      ) : (
        searchMovies.map((movie) => (
          <Movie key={movie.imdbID} onSelectedID={onSelectedID} {...movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;
