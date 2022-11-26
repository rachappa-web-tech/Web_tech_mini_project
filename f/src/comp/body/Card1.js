import React from 'react'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export default function Card1(props) {
  const alert_ =() =>{
    alert(props.name.name)
  }

  return (

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><h1>{props.name.name}</h1></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.name.name}</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button onClick={() =>{alert_()}}>ok </button>
            <Card.Link href="#">Card Link</Card.Link>
            <Link to={props.name.id} >Another Link</Link>
          </Card.Body>
        </Card>
      );
    }
    
