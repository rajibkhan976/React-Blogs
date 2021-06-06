import React, { useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";
import PostFormComponent from "./PostFormComponent";

function MyProfileComponent(props) {
	
	const { 
		showMyPosts, 
		myPosts, 
		toggleShowMyPost, 
		setSelectedPost, 
		reSetSelectedPost, 
		removePost, 
		fetchPostDetails,
		fetchPostComments
	} = useContext(BlogDataContext);
	
	function addPost(event) {
		reSetSelectedPost();
		toggleShowMyPost();
	}
	
	function editPost(event, post) {
		event.preventDefault();
		event.stopPropagation();
		if (post) {
			toggleShowMyPost();
			setSelectedPost(post);
		}
	}
	
	function deletePost(event, id) {
		event.preventDefault();
		event.stopPropagation();
		if (id) {
			removePost(id);
		}
	}
	
	function showPostDetails(event, id) {
		if (id) {
			fetchPostDetails(id);
			fetchPostComments(id);
			props.history.push('/postdetails/' + id);
		}
	}
	
	return (
		<>
			<h3 className="text-left ml-4 mt-4 mb-4">My Profile</h3>
			<div className="row">
				<div className="col-12">
					<button type="button" className="btn btn-info float-right" onClick={addPost}>
						{showMyPosts ? 'Add Post' : 'Cancel'}
					</button>
				</div>
			</div>
			{showMyPosts && myPosts && myPosts.length !== 0 ?
				myPosts.map(function(element, index) {
					return 	<div className="card ml-4 mt-4" style={{cursor: 'pointer'}} key={index} onClick={(event) => showPostDetails(event, element.id)}>
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