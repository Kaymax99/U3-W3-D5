import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getSongsAction,
  GET_HIP_SONGS,
  GET_POP_SONGS,
  GET_ROCK_SONGS,
} from "../redux/actions";
import { AlbumCard } from "./AlbumCard";

export const Home = ({ headers }) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const dispatch = useDispatch();
  const rockSongs = useSelector((state) => state.songs.rockResults);
  const popSongs = useSelector((state) => state.songs.popResults);
  const hipHopSongs = useSelector((state) => state.songs.hipHopResults);

  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  useEffect(() => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];
    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }
    // console.log(rockRandomArtists, popRandomArtists, hipHopRandomArtists);
    getArtists(rockRandomArtists, popRandomArtists, hipHopRandomArtists);
  }, []);

  const getArtists = (array1, array2, array3) => {
    for (let j = 0; j < array1.length; j++)
      dispatch(
        getSongsAction(baseEndpoint, headers, array1[j], GET_ROCK_SONGS)
      );

    for (let k = 0; k < array2.length; k++)
      dispatch(getSongsAction(baseEndpoint, headers, array2[k], GET_POP_SONGS));

    for (let l = 0; l < array3.length; l++)
      dispatch(getSongsAction(baseEndpoint, headers, array3[l], GET_HIP_SONGS));
  };

  //   useEffect(() => {
  //     if (rockSongs.length === 4) {
  //       console.log(rockSongs);
  //     }
  //   }, [rockSongs]);

  //   useEffect(() => {
  //     if (popSongs.length === 4) {
  //       console.log(popSongs);
  //     }
  //   }, [popSongs]);

  //   useEffect(() => {
  //     if (hipHopSongs.length === 4) {
  //       console.log(hipHopSongs);
  //     }
  //   }, [hipHopSongs]);

  //   console.log(headers);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {rockSongs.length === 4
                ? rockSongs.map((songData) => (
                    <AlbumCard key={songData.id} songData={songData} />
                  ))
                : ""}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {popSongs.length === 4
                ? popSongs.map((songData) => (
                    <AlbumCard key={songData.id} songData={songData} />
                  ))
                : ""}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {hipHopSongs.length === 4
                ? hipHopSongs.map((songData) => (
                    <AlbumCard key={songData.id} songData={songData} />
                  ))
                : ""}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
