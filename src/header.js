import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button, Col, Row} from 'react-bootstrap';
import logo from './images/logo.jpg'
class Header extends Component {
    render() {
        return (
            <div>
       
  <Navbar style={{backgroundColor: "#1b3440"}}>
    <Container >
      <Navbar.Brand href="/" style={{color:"white",padding:"40px"}}>
        
        <img
          alt=""
          src={logo}
          width="40"
          height="50"
          
          
          className="d-inline-block align-top"
        />{' '}
      <small style={{fontSize:"40px"}}>Spark Bank</small>
      <small style={{padding: "15px", color: "yellow",fontSize:"15px"}}>Connecting the world.</small>
      </Navbar.Brand>
    </Container>
    
    <Container>

    <nav class="navbar navbar-expand-lg navbar-dark" >
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="/users">List of users</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/transfer">Transfer money</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/transactions">Transaction History</a>
          </li>
      </ul>
   </div>
  
  </nav>

         
           </Container> 
       
  </Navbar>
  </div>
        )}
    }

  export default Header