import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavTop = () => {
  return (
    <Row className="offset-md-3">
      <Col xs={11} className="mainLinks d-none d-md-flex">
        <Link to={"/trending"}>TRENDING</Link>
        <Link to={"/podcast"}>PODCAST</Link>
        <Link to={"/moods"}>MOODS AND GENRES</Link>
        <Link to={"/new"}>NEW RELEASES</Link>
        <Link to={"/discover"}>DISCOVER</Link>
      </Col>
    </Row>
  );
};
