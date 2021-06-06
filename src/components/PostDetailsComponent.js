import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function PostDetailsComponent(props) {
	
	const { postDetails, postComments } = useContext(BlogDataContext);
	
	return (
		<>
			<h3 className="text-left ml-4 mt-4 mb-4">Post Details</h3>
			{postDetails &&
				<div className="card ml-4 mt-4 mb-4" key={postDetails.id}>
					<div className="card-header">
						<h5 className="card-title text-left">{postDetails.title}</h5>
					</div>
					<div className="card-body">
						<p className="card-text text-left">{postDetails.body}</p>
					</div>
				</div>
			}
			<h4 className="text-left ml-4">Comments</h4>
			<Accordion className="ml-4 mt-4">
			{postComments && postComments.length !== 0 &&
				postComments.map(function(element, index) {
					return  <Card key={index}>
								<Accordion.Toggle className="text-left" as={Card.Header} eventKey={index + 1}>
								  {element.name}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={index + 1}>
								  <Card.Body className="text-left">{element.body}</Card.Body>
								</Accordion.Collapse>
							</Card>;
				})
			}
			</Accordion>
		</>
	);
}

export default PostDetailsComponent;