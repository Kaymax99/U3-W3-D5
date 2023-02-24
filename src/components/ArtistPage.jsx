import { useEffect } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getInfoAction,
  getSongsAction,
  GET_ARTIST,
  GET_ARTIST_SONGS,
} from "../redux/actions";
import { ArtistSong } from "./ArtistSong";

export const ArtistPage = ({ headers }) => {
  const params = useParams();
  const artistEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  const searchEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const dispatch = useDispatch();
  const selectedArtist = useSelector((state) => state.lastViewedArtist.artist);
  const selectedArtistTracks = useSelector(
    (state) => state.lastViewedArtist.trackList
  );

  useEffect(() => {
    dispatch(
      getInfoAction(artistEndpoint, headers, params.artistID, GET_ARTIST)
    );
    dispatch(
      getInfoAction(searchEndpoint, headers, params.artistID, GET_ARTIST_SONGS)
    );
  }, []);

  //   useEffect(() => {
  //     if (selectedArtistTracks) {
  //       console.log(selectedArtistTracks);
  //     }
  //   }, [selectedArtistTracks]);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        {selectedArtist ? (
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{selectedArtist.name}</h2>
            <div id="followers">{selectedArtist.nb_fan} followers</div>
            <div
              className="d-flex justify-content-center"
              id="button-container"
            >
              <Button
                variant="success"
                className=" mr-2 mainButton"
                id="playButton"
              >
                PLAY
              </Button>
              <Button
                variant="outline-light"
                className="mainButton"
                id="followButton"
              >
                FOLLOW
              </Button>
            </div>
          </Col>
        ) : (
          <Spinner animation="border" variant="success" />
        )}
      </Row>
      <Row className="mb-3">
        <Col xs={10} md={10} lg={10} className="offset-1 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded">
              {selectedArtistTracks
                ? selectedArtistTracks.data.map((song) => (
                    <ArtistSong key={song.id} song={song}></ArtistSong>
                  ))
                : ""}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
