import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArtistSong } from "./ArtistSong";

export const ArtistPage = ({ fetchFn, headers }) => {
  const params = useParams();
  const artistEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  const searchEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const [artist, setArtist] = useState(null);
  const [trackList, setTrackList] = useState(null);

  useEffect(() => {
    fetchFn(artistEndpoint, headers, params.artistID, setArtist);
  }, []);

  useEffect(() => {
    if (artist) {
      fetchFn(searchEndpoint, headers, artist.name, setTrackList);
    }
  }, [artist]);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        {artist ? (
          <Col xs={12} className="mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan} followers</div>
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
          <Col xs={12} className="text-center mt-5">
            <Spinner animation="border" variant="success" />
          </Col>
        )}
      </Row>
      <Row className="mb-3">
        <Col xs={10} md={10} lg={10} className="offset-1 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded">
              {trackList ? (
                trackList.data.map((song) => (
                  <ArtistSong key={song.id} song={song}></ArtistSong>
                ))
              ) : (
                <Col xs={12} className="text-center mt-5">
                  <Spinner animation="border" variant="success" />
                </Col>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
