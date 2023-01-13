import { useEffect, useState, useNavigate } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const params = useParams();
  //console.log(params.movieID);

  //const navigate = useNavigate();

  const [clicked, setClicked] = useState(null);

  const getClickedMovie = async () => {
    const url = process.env.REACT_APP_BE_URL;
    let response = await fetch(`${url}/medias/${params.movieID}`);

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
          <Card.Img variant="top" src={clicked.poster} />
          <Card.Body>
            <Card.Title>{clicked.title}</Card.Title>
            <Card.Text>clicked.Plot</Card.Text>
            <Link to={"/tvshows"}>
              <Button variant="primary">Go Back</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Details;
