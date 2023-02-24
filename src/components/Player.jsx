import shuffle from "../img/Shuffle.png";
import previous from "../img/Previous.png";
import play from "../img/Play.png";
import next from "../img/Next.png";
import repeat from "../img/Repeat.png";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Player = () => {
  const song = useSelector((state) => state.player.song);
  return (
    <Container fluid className="pt-1 fixed-bottom bg-container">
      <Row>
        <Col lg={10} className="offset-1 offset-md-3 d-flex px-0">
          <Col
            xs={3}
            className="px-0 text-light align-self-center d-flex align-items-center"
          >
            {song ? (
              <>
                <img src={song.album.cover_small} alt="Song" />
                <div className="ml-2">
                  <div>
                    <h6 className="m-0">
                      {song.album.title.length < 16
                        ? song.title
                        : song.title.substring(0, 16) + "..."}
                    </h6>
                  </div>
                  <div>
                    <h6 className="playerAlbum">
                      {song.album.title.length < 20
                        ? song.album.title
                        : song.album.title.substring(0, 20) + "..."}
                    </h6>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </Col>
          <Col xs={9} md={8} className="pl-0">
            <Row>
              <Col
                xs={6}
                md={4}
                lg={2}
                className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
              >
                <Row>
                  <a>
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a>
                    <img src={previous} alt="previous" />
                  </a>
                  <a>
                    <img src={play} alt="play" />
                  </a>
                  <a>
                    <img src={next} alt="next" />
                  </a>
                  <a>
                    <img src={repeat} alt="repeat" />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={11}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
