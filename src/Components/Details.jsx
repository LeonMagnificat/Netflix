import { useEffect, useState, useNavigate } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  //console.log(params.movieID);

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(null);

  const getClickedMovie = async () => {
    let response = await fetch("https://www.omdbapi.com/?apikey=20112dce&i=" + params.movieID);

    if (response.ok) {
      let data = await response.json();
      setClicked(data);
    }
    console.log(clicked.Poster);
  };

  useEffect(() => {
    getClickedMovie();
  }, []);

  return (
    <div>
      {clicked && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={clicked.Poster} />
          <Card.Body>
            <Card.Title>{clicked.Title}</Card.Title>
            <Card.Text>{clicked.Plot}</Card.Text>
            <Button variant="primary">Go Back</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Details;
