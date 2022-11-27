import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { SearchBar, SideBar, MusicPlayer, TopPlay } from "./components";
import {
  Discover,
  TopArtists,
  AroundYou,
  ArtistDetails,
  Search,
  TopCharts,
  SongDetails,
} from "./pages";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:artistId" element={<ArtistDetails />} />
              <Route path="/search/:searchText" element={<Search />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
