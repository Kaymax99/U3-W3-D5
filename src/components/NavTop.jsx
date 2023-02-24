import { Link } from "react-router-dom";

export const NavTop = () => {
  return (
    <div className="row offset-md-3">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <Link to={"/trending"}>TRENDING</Link>
        <Link to={"/podcast"}>PODCAST</Link>
        <Link to={"/moods"}>MOODS AND GENRES</Link>
        <Link to={"/new"}>NEW RELEASES</Link>
        <Link to={"/discover"}>DISCOVER</Link>
      </div>
    </div>
  );
};
