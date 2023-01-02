import React from 'react';
import {Card} from 'react-bootstrap'
import ReactStars from 'react-stars';


const MovieCard = ({movie}) => {
  console.log(movie)
    return (
        <div>
          <Card style={{ width: '18rem', height:"600px", marginTop: "30px", backgroundColor:"grey", textAlign:"center" }}>
              <Card.Img style={{width:"287px", height:"350px"}} variant="top" src={movie.posterUrl}/> 
            <Card.Body>
            <Card.Title style={{color:"blue"}}>{movie.title}</Card.Title>
            <Card.Text>
              {movie.description}
            </Card.Text>
            <ReactStars
              style={{display:"flex"}}
              count={5}
              value={movie.rate}
              size={30}
              edit={false}
              activeColor="#150E56"
              half={false}/>
            </Card.Body>
          </Card>
        </div>
    )
}

export default MovieCard