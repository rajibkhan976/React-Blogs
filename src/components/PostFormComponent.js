import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";

function PostFormComponent(props) {
	
  const { 
	addPost,
	selectedPostId,
	selectedPostTitle,
	selectedPostBody,
	selectedPostUserId,
	updatePost,
	toggleShowMyPost
  } = useContext(BlogDataContext);
	
  const [postTitle, setPostTitle] = useState(selectedPostTitle);
  const [description, setDescription] = useState(selectedPostBody);
  
  function handleChange(event) {
	  if (event.target.id === "postTitle") {
		  setPostTitle(event.target.value);
	  }
	  if (event.target.id === "description") {
		  setDescription(event.target.value);
	  }
  }
  
  function savePost(event) {
	  if (postTitle && postTitle.trim() && description && description.trim()) {
		  if (selectedPostId && selectedPostUserId) {
			  updatePost(selectedPostId, { id: selectedPostId, title: postTitle.trim(), body: description.trim(), userId: selectedPostUserId});
			  toggleShowMyPost();
		  } else {
			  addPost({userId: 2, title: postTitle.trim(), body: description.trim()});
			  toggleShowMyPost();
		  }
	  }
  }
  
  return (
	<div className="row">
		<div className="col-12">
			<h3 className="text-left mt-4 mb-4">Post</h3>
			<div className="mb-3">
			  <label htmlFor="postTitle" className="form-label float-left">Post Title</label>
			  <input type="text" className="form-control" id="postTitle" onChange={handleChange} value={postTitle} required />
			</div>
			<div className="mb-3">
			  <label htmlFor="description" className="form-label float-left">Description</label>
			  <textarea className="form-control" id="description" rows="3" onChange={handleChange} value={description} required></textarea>
			</div>
			<button type="button" className="btn btn-success float-right" onClick={savePost}>Save</button>
		</div>
	</div>
  );
}

export default PostFormComponent;