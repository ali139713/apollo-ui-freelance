import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class MainCard extends Component {
    render() {
     return(
        <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          
        </Card.Body>
      </Card>
     )
    }
}

export default MainCard;