import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import "../Components/Netflix.css";

const MovieSlider = (props) => {
  // state = {
  //   film: [],
  //   isLoading: false,
  // };

  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    try {
      let response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=874ae9ca&s=" + props.title);

      if (response.ok) {
        const data = await response.json();
        const movieArray = data.Search;
        console.log(movieArray);
        // this.setState({ film: movieArray });
        setFilm(movieArray);
        // this.setState({ isLoading: false });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount() {
  //   this.getMovies();
  //   this.setState({ isLoading: true });
  // }

  useEffect(() => {
    getMovies();
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <Spinner className="Loader" animation="grow" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      )}

      <Container fluid className="movie-rows">
        <h5>{props.title}</h5>

        <Carousel>
          <Carousel.Item>
            <Row className="d-flex">
              {film.slice(0, 6).map((movie) => (
                <Col md={2} key={movie.imdbID} className="image-card">
                  <Link to={"/details/" + movie.imdbID}>
                    <img className="movie-cover" src={movie.Poster} alt="#" />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex">
              {film.slice(4, 12).map((movie) => (
                <Col md={2} key={movie.imdbID} className="image-card">
                  <Link to={"/details/" + movie.imdbID}>
                    <img className="movie-cover" src={movie.Poster} alt="#" />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default MovieSlider;
