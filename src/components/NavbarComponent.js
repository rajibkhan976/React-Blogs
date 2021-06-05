import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarComponent(props) {
  
  return (
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					  <NavLink className="nav-link" aria-current="page" to="/posts">Posts</NavLink>
					</li>
					<li className="nav-item">
					  <NavLink className="nav-link" to="/myposts">My Posts</NavLink>
					</li>
					<li className="nav-item">
					  <NavLink className="nav-link" to="/users" aria-disabled="true">Users</NavLink>
					</li>
				  </ul>
				</div>
			</div>
		</nav>
    </>
  );
}

export default NavbarComponent;