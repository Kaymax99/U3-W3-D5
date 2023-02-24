import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInfoAction, GET_ALBUM } from "../redux/actions";
import { AlbumArt } from "./AlbumArt";
import { AlbumSong } from "./AlbumSong";

export const AlbumPage = ({ headers }) => {
  const params = useParams();
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const dispatch = useDispatch();
  const selectedAlbum = useSelector((state) => state.lastViewedAlbum.album);

  useEffect(() => {
    dispatch(getInfoAction(baseEndpoint, headers, params.albumID, GET_ALBUM));
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      console.log(selectedAlbum.tracks.data);
    }
  }, [selectedAlbum]);

  return (
    <Col md={9} className="offset-md-3 mainPage text-light">
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {selectedAlbum ? (
            <AlbumArt album={selectedAlbum} />
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Col>
        <Col md={8} className="p-3 pt-5">
          <Row>
            <Col className="mb-5" id="trackList">
              {selectedAlbum ? (
                selectedAlbum.tracks.data.map((song, i) => (
                  <AlbumSong key={"song-" + i} song={song} />
                ))
              ) : (
                <Spinner animation="border" variant="success" />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
