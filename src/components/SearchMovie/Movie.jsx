import React from "react";

const Movie = ({ onSelectedID, imdbID, Poster, Title, Year }) => {
  return (
    <div
      className="flex gap-10 p-10  hover:bg-slate-600 cursor-pointer"
      onClick={() => onSelectedID(imdbID)}
    >
      {Poster === "N/A" ? (
        <div className="w-[50px] h-[70px] bg-black"></div>
      ) : (
        <img src={Poster} alt={Title} className="w-[50px]" />
      )}
      <div>
        <p className="text-white text-xl">{Title}</p>
        <p className="text-white">📅 {Year}</p>
      </div>
    </div>
  );
};

export default Movie;
