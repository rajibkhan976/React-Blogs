import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";
import PostFormComponent from "./PostFormComponent";

function MyProfileComponent(props) {
	
	const { showMyPosts, myPosts, toggleShowMyPost, setSelectedPost, removePost } = useContext(BlogDataContext);
	
	function addPost(event) {
		toggleShowMyPost();
	}
	
	function editPost(event, post) {
		toggleShowMyPost();
		setSelectedPost(post);
	}
	
	function deletePost(event, id) {
		removePost(id);
	}
	
	return (
		<>
			<h3 className="text-left mt-4 mb-4">My Profile</h3>
			<div className="row">
				<div className="col-12">
					<button type="button" className="btn btn-info float-right" onClick={addPost}>
						{showMyPosts ? 'Add Post' : 'Cancel'}
					</button>
				</div>
			</div>
			{showMyPosts && myPosts && myPosts.length !== 0 ?
				myPosts.map(function(element, index) {
					return 	<div className="card mt-4" key={index}>
								<div className="card-header">
									<h5 className="card-title text-left">{element.title}</h5>
								</div>
								<div className="card-body">
									<p className="card-text text-left">{element.body}</p>
									<button type="button" className="btn btn-danger float-right" onClick={(event) => deletePost(event, element.id)}>Delete</button>
									<button type="button" className="btn btn-warning mr-2 float-right" onClick={(event) => editPost(event, {id: element.id, title: element.title, body: element.body, userId: element.userId})}>Update</button>
								</div>
							</div>;
				})
				:
				<PostFormComponent />
			}
		</>
	);
}

export default MyProfileComponent;