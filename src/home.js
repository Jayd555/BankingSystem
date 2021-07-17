import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button,Row , Col} from 'react-bootstrap';
import logo from './images/logo.jpg'
import bank from './images/bank1.jpg'

class Home extends Component {
    render() {
        return (
<div>
                <>
               
       
       <Container style={{paddingTop:"5px"}}> 
    <div class="row"  style={{ 
     paddingBottom: "50px"}}>
    <div class="col-lg-6" style={{paddingTop:"100px"}}>
      <h1 class="big-heading">Welcome to Spark Bank</h1>
      <h1 class="new-heading">About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo</p>
    </div>
    <div class="col-lg-6" >
    <img class="title-image" height="350" src={bank}></img>
    </div>
  
  </div>
  </Container>
  


  <div>
<section class="blue-section" id="features"> 
<div class="row">
  <div class="feature-box col-lg-4"> <i class="icon fas fa-check-circle fa-4x"></i>
    <h3 class="feature-title">Easy to use.</h3>
    <p>Pay bills online very easily.
    Transfer money.</p>
  </div>
  <div class="feature-box col-lg-4"> <i class="icon fas fa-bullseye fa-4x"></i>
    <h3 class="feature-title">Minimum charges</h3>
    <p>Lower your overhead fees</p>
  </div>
  <div class="feature-box col-lg-4"> <i class="icon fas fa-heart fa-4x"></i>
    <h3 class="feature-title">Guaranteed service.</h3>
    <p>Guaranteed to provide you best service we can anytime.</p>
  </div>
</div>
 </section>
 </div>



 <section class="white-section" id="pricing" >

<h2  class="section-heading">Our Services</h2>
<p class="heading-part">Simple and affordable price plans</p>

<div class="row">
<div class="pricing-column  col-md-6 col-lg-4" > 

<div class="card">
  <div class="card-header">
  <h3>TransferMoney</h3>
</div>
 <div class="card-body">
  <p>Transfer your money with your friends and family with security</p>
  <button class="btn btn-lg btn-dark btn-block" type="button">Click here</button>
 </div>
</div>
</div>

<div class="pricing-column col-md-6 col-lg-4">
<div class="card">
  <div class="card-header">
  <h3>TransactionHistory</h3>
  </div>
 <div class="card-body">
  <p>Viewing transaction history of all the users at just a click</p>
  <button class="btn btn-lg btn-dark btn-block" type="button">Click here</button>
 </div>
</div>
</div>

<div class="pricing-column col-md-12 col-lg-4">
<div class="card">
  <div class="card-header">
    <h3>Customers</h3>
  </div>
  <div class="card-body">
  <p>See to whom you can transfer the money</p>
  <button class="btn btn-lg btn-dark btn-block" type="button">Click here</button>
  </div>
</div>
</div>
</div>        
</section>

 </>
 </div>
 
                   
        )
    }
}
export default Home

