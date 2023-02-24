import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToPlayerAction } from "../redux/actions";

export const AlbumSong = ({ song }) => {
  const dispatch = useDispatch();
  //   console.log(song);
  return (
    <div className="py-3 trackHover">
      <Button
        variant="link"
        className="card-title trackHover px-3 mb-0"
        style={{ color: "white" }}
        onClick={() => {
          dispatch(addToPlayerAction(song));
        }}
      >
        {song.title}
      </Button>
      <small className="duration mt-2" style={{ color: "white" }}>
        {Math.floor(
          parseInt(song.duration) / 60 // setting the duration minutes
        )}
        :
        {parseInt(song.duration) % 60 < 10
          ? "0" + (parseInt(song.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
          : parseInt(song.duration) % 60}
      </small>
    </div>
  );
};
