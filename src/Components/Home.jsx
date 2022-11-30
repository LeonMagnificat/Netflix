import Cover from "./Cover";
import Pagetitle from "./Pagetitle";
import MovieSlider from "./MovieSlider";

const Home = () => {
  return (
    <>
      <Cover />

      <Pagetitle />

      <MovieSlider title="Harry Potter" />

      <MovieSlider title="Star Wars" />

      <MovieSlider title="Lord of the rings" />

      <MovieSlider title="Twilight" />
    </>
  );
};

export default Home;
