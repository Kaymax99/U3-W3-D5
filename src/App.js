// Note to self: remember to actually finish implementing loadings and error handling on actions, those actions currently do nothing.

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
import { SearchPage } from "./components/SearchPage";
import { Favorites } from "./components/Favorites";

let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});

const fetchFunction = async (baseEndpoint, headers, query, setState) => {
  try {
    const res = await fetch(baseEndpoint + query, {
      method: "GET",
      headers,
    });
    if (res.ok) {
      const data = await res.json();
      // console.log(data);
      setState(data);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <BrowserRouter>
      <SidebarLeft />
      <NavTop />
      <Routes>
        <Route path="/" element={<Home headers={headers} />} />
        <Route
          path="/favorites"
          element={
            <Favorites />
          } /* Favorite songs are shown here. Clicking on 'Your Library' redirects to this route */
        />
        <Route
          path="/search/:query"
          element={
            <SearchPage
              headers={
                headers
              } /* Searching through the input field on the left while in any page redirects to this page and returns fetch results */
            />
          }
        />
        <Route
          path="/artist/:artistID"
          element={
            <ArtistPage
              headers={headers}
              fetchFn={
                fetchFunction
              } /* Clicking on an artist redirects to this page and shows their fetch */
            />
          }
        />
        <Route
          path="/album/:albumID"
          element={
            <AlbumPage
              headers={headers}
              fetchFn={
                fetchFunction
              } /* Clicking on an album redirects to this page and shows its content */
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
