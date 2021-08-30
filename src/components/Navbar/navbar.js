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
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import "./navbar.css"


class Navigationbar extends Component {
    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light  ">
  <Container fluid>
  <Navbar.Brand href="#home"><img src= "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyNCAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4xNTIgOC44NDMyNkwyMC4wNzA0IDI2Ljc4NThIMjRMMTIuMjE1OCAwLjQ3ODUxNkwwIDI2Ljc4NThIMy44OTMzN0wxMi4xNTIgOC44NDMyNlpNMTIuMTUyIDM0LjM5MjFMMTUuNDg2MyAyNi43ODU4SDguNjc0MzlMMTIuMTUyIDM0LjM5MjFaIiBmaWxsPSIjMzU0MDUzIi8+Cjwvc3ZnPgo="/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#features"><strong>Home</strong></Nav.Link>
      <NavDropdown title="Search" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong><PeopleIcon style={{ color: "#1991eb" }} /> People</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong><BusinessIcon style={{ color: "#1991eb" }} /> Companies</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong><ListAltIcon style={{ color: "#1991eb" }} /> List</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><SearchOutlinedIcon style={{ color: "#1991eb" }} /> Saved Searches</strong></NavDropdown.Item>
      </NavDropdown>  
      <NavDropdown title="Engage" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong><InputOutlinedIcon style={{ color: "#1991eb" }}  /> Sequences</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong><EmailOutlinedIcon style={{ color: "#1991eb" }} /> Emails</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong><CallOutlinedIcon style={{ color: "#1991eb" }} /> Calls</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><AssignmentTurnedInOutlinedIcon style={{ color: "#1991eb" }} />Tasks</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><ReceiptOutlinedIcon style={{ color: "#1991eb" }} />Templates</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><AssessmentOutlinedIcon style={{ color: "#1991eb" }} />Analytics</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><SettingsOutlinedIcon style={{ color: "#1991eb" }} />Settings & MailBoxes</strong></NavDropdown.Item>
      </NavDropdown>  
      <NavDropdown title="Enrich" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong><DashboardOutlinedIcon style={{ color: "#1991eb" }} /> Overview</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong><PrintOutlinedIcon style={{ color: "#1991eb" }} /> CRM Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><strong><PublishOutlinedIcon style={{ color: "#1991eb" }} /> CSV Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><AssessmentOutlinedIcon style={{ color: "#1991eb" }} />API Enrichment</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4"><strong><LocalMallOutlinedIcon style={{ color: "#1991eb" }} />Job Change Alerts</strong></NavDropdown.Item>
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
<Navbar  style = {{backgroundColor:"#eff3f7"}}collapseOnSelect expand="lg" variant="light  ">
  <Container fluid>
  <Nav.Link href="#features"><strong>Onboarding</strong></Nav.Link>
  <Nav.Link href="#features"><strong>Cockpit</strong></Nav.Link>
  </Container>
</Navbar>
<Navbar  id="#secondNavbar" collapseOnSelect expand="lg" bg="light" variant="light  ">
  <Container fluid>
  <NavDropdown title="Sales Rep Cockpit" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><strong>Sales Rep Cockpit</strong></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><strong>Sales Manager Cockpit</strong></NavDropdown.Item>
      </NavDropdown>
  </Container>
</Navbar>
            </div>
        );
    }
}

export default Navigationbar;