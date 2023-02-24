import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToPlayerAction } from "../redux/actions";
import { Heart } from "react-bootstrap-icons";

export const ArtistSong = ({ song }) => {
  const dispatch = useDispatch();
  //   console.log(songInfo);
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
      <Button
        variant="none"
        className="position-absolute right-0 p-2"
        onClick={() => dispatch()}
      >
        <Heart color="white" size={28} />
      </Button>
      <Link to={"/album/" + song.album.id}>
        <img className="img-fluid" src={song.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Button
          variant="none"
          className="text-light"
          onClick={() => {
            dispatch(addToPlayerAction(song));
          }}
        >
          <h5 className="m-0">
            {
              song.title.length < 16
                ? song.title
                : song.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
            }
          </h5>
        </Button>
        <Link to={"/album/" + song.album.id}>
          <h6>
            {
              song.album.title.length < 16
                ? song.album.title
                : song.album.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
            }
          </h6>
        </Link>
      </p>
    </Col>
  );
};
