import { Link } from "react-router-dom";

export const AlbumCard = ({ songData }) => {
  // songInfo represents the info for the current song
  // creating the wrapper div

  return (
    <div className="col text-center" id={songData.id}>
      <Link to={"/album/" + songData.album.id}>
        <img className="img-fluid" src={songData.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to={"/album/" + songData.album.id}>
          Album: {""}
          {songData.album.title.length < 16
            ? songData.album.title
            : songData.album.title.substring(0, 16) + "..."}
          <br />
        </Link>
        <Link to={"/artist/" + songData.artist.id}>
          Artist: {songData.artist.name}
        </Link>
      </p>
    </div>
  );
};
