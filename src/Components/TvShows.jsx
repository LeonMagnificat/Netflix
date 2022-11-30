import { Container, Row } from "react-bootstrap";
import MovieSlider from "./MovieSlider";

const TvShows = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 style={{ color: "white" }}>TV Shows</h1>
        </Row>
      </Container>

      <MovieSlider title="Harry Potter" />

      <MovieSlider title="Star Wars" />
    </>
  );
};

export default TvShows;
