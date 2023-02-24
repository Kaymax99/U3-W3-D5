import { Link } from "react-router-dom";

export const AlbumArt = ({ album }) => {
  // console.log(album);
  return (
    <>
      <img src={album.cover} className="card-img img-fluid" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{album.title}</p>
      </div>
      <div className="text-center">
        <Link to={"/artist/" + album.artist.id}>
          <p className="artist-name">{album.artist.name}</p>
        </Link>
      </div>
      <div className="mt-4 text-center">
        <button id="btnPlay" className="btn btn-success" type="button">
          Play
        </button>
      </div>
    </>
  );
};
