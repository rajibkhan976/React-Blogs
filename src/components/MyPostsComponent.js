import React, { useState, useEffect, useContext } from 'react';
import PostsComponent from "./PostsComponent";

function DashboardComponent(props) {
  
  return (
	<div className="row">
		<div className="col-12">
			<h3 className="text-left mt-4 mb-4">My Posts</h3>
		</div>
	</div>
  );
}

export default DashboardComponent;