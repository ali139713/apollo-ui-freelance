import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import "./navbar.css"
import FlexView from 'react-flexview/lib';

class Navigationbar extends Component {
    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light  ">
  <Container fluid>
  <Navbar.Brand href="#home"><img src= "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyNCAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4xNTIgOC44NDMyNkwyMC4wNzA0IDI2Ljc4NThIMjRMMTIuMjE1OCAwLjQ3ODUxNkwwIDI2Ljc4NThIMy44OTMzN0wxMi4xNTIgOC44NDMyNlpNMTIuMTUyIDM0LjM5MjFMMTUuNDg2MyAyNi43ODU4SDguNjc0MzlMMTIuMTUyIDM0LjM5MjFaIiBmaWxsPSIjMzU0MDUzIi8+Cjwvc3ZnPgo="/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#features"><strong>Home</strong></Nav.Link>
      <NavDropdown title="Search" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong>People</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong>Companies</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong>List</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Saved Searches</strong></NavDropdown.Item>
      </NavDropdown>  
      <NavDropdown title="Engage" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong>Sequences</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong>Emails</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong>Calls</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Tasks</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Templates</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Analytics</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Settings & MailBoxes</strong></NavDropdown.Item>
      </NavDropdown>  
      <NavDropdown title="Enrich" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong>Overview</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong>CRM Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong>CSV Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>API Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong>Job Change Alerts</strong></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features"><strong>Settings</strong></Nav.Link>
    </Nav>
    <Nav>
     <Button className="navbarButton"> Upgrade </Button>
     <InputGroup size="sm" className="ml-0 mb-2 mt-2">
    <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
          
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
      <div className="iconContainer">
  <CallOutlinedIcon />
  <ContactSupportOutlinedIcon />
  <NotificationsOutlinedIcon />
  </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        );
    }
}

export default Navigationbar;