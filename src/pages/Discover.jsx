import { Error, Loader, SongCard } from "../components";
import { songGenres } from "../assets/constants";

const Discover = () => {
  const songGenreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-left text-3xl font-bold">
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

      <div></div>
    </div>
  );
};

export default Discover;
