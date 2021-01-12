import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// const easyQuiz = false;

 function Menu() {
    return (
        <div>       
       <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="m-auto text-uppercase ">
          <Nav.Link href="/PageEasy">Generate list of Numbers</Nav.Link>
        </Nav>
      </Navbar>
      </div>

      
    )
}
export default Menu;