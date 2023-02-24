import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavAction,
  addToPlayerAction,
  removeFromFavAction,
} from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useEffect } from "react";

export const ArtistSong = ({ song }) => {
  const dispatch = useDispatch();
  const favoriteSongs = useSelector((state) => state.favorites.songs);

  const checkFavs = () => {
    if (favoriteSongs.find((el) => el.id === song.id) === undefined) {
      dispatch(addToFavAction(song));
    } else {
      dispatch(removeFromFavAction(song.id));
    }
  };

  //   useEffect(() => {
  //     console.log(favoriteSongs);
  //   }, [favoriteSongs]);

  return (
    <Col xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
      <Button
        variant="none"
        className="position-absolute p-2 bgGreen"
        onClick={() => checkFavs()}
      >
        {favoriteSongs.find((el) => el.id === song.id) === undefined ? (
          <Heart color="white" size={24} />
        ) : (
          <HeartFill color="white" size={24} />
        )}
      </Button>

      <Link to={"/album/" + song.album.id}>
        <img className="img-fluid" src={song.album.cover_medium} alt="1" />
      </Link>
      <div>
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
        <Link to={"/album/" + song.album.id} className="text-light">
          <h6>
            {
              song.album.title.length < 16
                ? song.album.title
                : song.album.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
            }
          </h6>
        </Link>
      </div>
    </Col>
  );
};
