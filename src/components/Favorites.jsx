import { Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ArtistSong } from "./ArtistSong";

export const Favorites = () => {
  const favoriteSongs = useSelector((state) => state.favorites.songs);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={12}>
          <h2 className="text-light ml-4 pt-5">Your Favorite Songs</h2>
          <Row className="imgLinks py-3">
            {favoriteSongs.length > 0 ? (
              favoriteSongs.map((song) => (
                <ArtistSong key={song.id} song={song}></ArtistSong>
              ))
            ) : (
              <div>
                <h4 className="text-light ml-4">
                  It seems you don't have any favorite song yet! Add at least
                  one song and then come back.
                </h4>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
