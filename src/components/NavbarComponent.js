import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function NavbarComponent(props) {
  
  return (
	<>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <NavLink className="nav-link text-left" aria-current="page" to="/posts">Posts</NavLink>
			  <NavLink className="nav-link text-left" to="/myposts">My Profile</NavLink>
			  <NavLink className="nav-link text-left" to="/users" aria-disabled="true">Users</NavLink>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
    </>
  );
}

export default NavbarComponent;