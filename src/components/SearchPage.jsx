import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GET_SEARCH,
  GET_SONGS_ERROR,
  GET_SONGS_LOADING_OFF,
  GET_SONGS_LOADING_ON,
} from "../redux/actions";
import { ArtistSong } from "./ArtistSong";

export const SearchPage = ({ headers }) => {
  const params = useParams();
  const dispatch = useDispatch();
  //   const [songs, setSongs] = useState(null);
  const songs = useSelector((state) => state.search.results);
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  useEffect(() => {
    const fetchFn = async () => {
      try {
        dispatch({
          type: GET_SONGS_LOADING_ON,
        });
        const res = await fetch(baseEndpoint + params.query, {
          method: "GET",
          headers,
        });
        if (res.ok) {
          const { data } = await res.json();
          //   console.log(data);
          dispatch({
            type: GET_SEARCH,
            payload: data,
          });
        } else {
          dispatch({
            type: GET_SONGS_ERROR,
            payload: "Response not ok",
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_SONGS_ERROR,
          payload: error.message,
        });
      } finally {
        dispatch({
          type: GET_SONGS_LOADING_OFF,
        });
      }
    };
    fetchFn();
  }, [params.query]);

  //   useEffect(() => {
  //     searchAction(baseEndpoint, headers, params.query, GET_SEARCH);
  //   }, [params.query]);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={12}>
          <div id="searchResults">
            <h2 className="text-light ml-4">Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {songs ? (
                songs.map((song) => (
                  <ArtistSong key={song.id} song={song}></ArtistSong>
                ))
              ) : (
                <div className="text-center">
                  <Spinner animation="border" variant="success" />
                </div>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
