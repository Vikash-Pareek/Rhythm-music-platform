import { Route, Routes } from "react-router-dom";

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
  return (
    <div>
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
  );
}

export default App;
