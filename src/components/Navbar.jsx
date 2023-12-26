import React from "react";

const Navbar = ({ search, onMovieSearch, totalFounedMovies }) => {
  return (
    <nav className="flex flex-col gap-3 md:flex-row  md:justify-between items-center bg-purple-500 h-[16vh] md:h-[10vh] p-5 rounded-md">
      <h2 className="text-2xl font-bold text-white">🎥 Let's Watch Movie</h2>
      <input
        type="text"
        className="text-lg outline-none px-2 rounded-lg bg-purple-400 text-white"
        value={search}
        onChange={onMovieSearch}
      />
      <p className="text-xl text-white">Found {totalFounedMovies} Results</p>
    </nav>
  );
};

export default Navbar;
