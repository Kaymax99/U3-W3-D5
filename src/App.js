import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumPage } from "./components/AlbumPage";
import { ArtistPage } from "./components/ArtistPage";
import { Home } from "./components/Home";
import { NavTop } from "./components/NavTop";
import { NotFound } from "./components/NotFound";
import { Player } from "./components/Player";
import { SidebarLeft } from "./components/SidebarLeft";

let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});

function App() {
  return (
    <BrowserRouter>
      <SidebarLeft />
      <NavTop />
      <Routes>
        <Route path="/" element={<Home headers={headers} />} />
        <Route
          path="/artist/:artistID"
          element={<ArtistPage headers={headers} />}
        />
        <Route
          path="/album/:albumID"
          element={<AlbumPage headers={headers} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
