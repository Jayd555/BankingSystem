import React, {Component} from 'react';

import {  Navbar, Nav, Container, Button,Row,Col} from 'react-bootstrap';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";





class Footer extends Component {
    render() {
    return(
        <footer>
            <div className="footer">
            <Container >
            <Row>
                
            <Col>
                <h4 style={{color: "white"}} >Have Any Questions?</h4>
               <ul className="list-unstyled" style={{color: "gray"}}>
                   <li>
                        support.Spark.bank@gmail.com
                   </li>
                   <li>
                    12991299
                   </li>
               </ul>
               

                </Col>
            
                <Col>
                <h4 style={{color: "white"}}>Follow us on</h4>
                <ul className="list-unstyled" >
                    <li>
                <a href="https://github.com/Jayd555" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px", color: "yellow"}} icon={faFacebook} size="3x"  /></a>
                <a href="https://github.com/Jayd555" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "yellow"}} icon={faTwitter} size="3x"  /></a>
                <a href="https://github.com/Jayd555" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "yellow"}} icon={faInstagram} size="3x"  /></a>
                </li>
                </ul>
                </Col>
                <Col>
                <h4 style={{color: "yellow"}}>Spark Bank <small style={{fontSize: "15px"}}>Connecting world</small></h4>
                <ul className="list-unstyled" style={{color: "gray"}}>
                    <li>Marine lines,</li>
                    <li>Mumbai.</li>
                </ul>
                
                </Col>
               </Row>
            <div className="footer-copyright text-center py-3" style={{color: "yellow"}}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> damanijay5@gmail.com | https://github.com/Jayd555</a>
        </Container>
      </div>

            </Container>  
            </div>  
        </footer>
    )
};
    }

  export default Footer
