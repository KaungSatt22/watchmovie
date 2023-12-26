import React, { useState } from "react";
import Summary from "./Summary";
import SelectedMovie from "./SelectedMovie";
import WatchList from "./WatchList";

const WatchMovies = ({ selectedID, onRemoveID }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [watchMovieList, setWatchMovieList] = useState([]);
  const handleAddWatchMovieList = (newMovie) => {
    setWatchMovieList((prev) => [...prev, newMovie]);
  };
  const handleRemoveWatchMovieList = (id) => {
    setWatchMovieList((prev) => prev.filter((movie) => movie.id !== id));
  };
  return (
    <div className="bg-slate-700 rounded-lg overflow-y-scroll scroll-smooth no-scrollbar relative">
      <button
        className="text-white absolute right-0 bg-black w-10 h-10 text-xl rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <div>
          {selectedID ? (
            <SelectedMovie
              selectedID={selectedID}
              onRemoveID={onRemoveID}
              watchMovieList={watchMovieList}
              onAddWatchMovieList={handleAddWatchMovieList}
            />
          ) : (
            <>
              <Summary watchMovieList={watchMovieList} />
              <WatchList
                watchMovieList={watchMovieList}
                onRemoveWatchMovieList={handleRemoveWatchMovieList}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WatchMovies;
