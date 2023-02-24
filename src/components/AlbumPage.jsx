import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AlbumArt } from "./AlbumArt";
import { AlbumSong } from "./AlbumSong";

export const AlbumPage = ({ fetchFn, headers }) => {
  const params = useParams();
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetchFn(baseEndpoint, headers, params.albumID, setAlbum);
  }, []);

  //   useEffect(() => {
  //     if (album) {
  //       console.log(album);
  //     }
  //   }, [album]);

  return (
    <Col md={9} className="offset-md-3 mainPage text-light pb-5">
      <Row>
        <Col md={4} className="pt-5 text-center ml-4" id="img-container">
          {album ? (
            <AlbumArt album={album} />
          ) : (
            <Spinner className="mt-5" animation="border" variant="success" />
          )}
        </Col>
        <Col md={7} className="p-3 pt-5">
          <Row>
            <Col className="mb-5" id="trackList">
              {album ? (
                album.tracks.data.map((song, i) => (
                  <AlbumSong key={"song-" + i} song={song} />
                ))
              ) : (
                <div className="text-center">
                  <Spinner
                    className="mt-5"
                    animation="border"
                    variant="success"
                  />
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
