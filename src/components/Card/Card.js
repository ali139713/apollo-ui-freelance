import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import FlexView from 'react-flexview/lib';
import Button from 'react-bootstrap/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './styles.css'
class MainCard extends Component {
    render() {
     return(
        <Card className="main-card "> 
        <Card.Header className="header">
          <FlexView basis="100%" >
            <FlexView basis="50%" >
          {this.props.header}
          </FlexView>
            <FlexView hAlignContent="right" basis="50%" >
          <Button variant="outline-secondary"><MoreHorizIcon /></Button>
          </FlexView>
          </FlexView>
          </Card.Header>
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