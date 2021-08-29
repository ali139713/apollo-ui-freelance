import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './styles.css'
class MainCard extends Component {
    render() {
     return(
        <Card className="main-card"> 
        <Card.Header className="header">{this.props.header}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
          No contacts opened your email in the last hour.
          </Card.Text>
          
        </Card.Body>
      </Card>
     )
    }
}

export default MainCard;