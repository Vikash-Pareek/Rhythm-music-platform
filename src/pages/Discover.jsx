import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { songGenres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const songGenreTitle = "Pop";
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white text-left text-3xl font-bold">
          Discover {songGenreTitle}
        </h2>
        <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {songGenres.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
