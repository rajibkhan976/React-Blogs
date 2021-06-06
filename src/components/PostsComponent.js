import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";

function PostsComponent(props) {
	
  const { posts, fetchPostDetails, fetchPostComments } = useContext(BlogDataContext);
  
  const [loadPost, setLoadPost] = useState(9);
  
  function loadMore() {
	if (loadPost <= 99) {
		setLoadPost(loadPost + 10);
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
		<h3 className="text-left ml-4 mt-4 mb-4">Blog Posts</h3>
		{posts && posts.length !== 0 &&
			posts.map(function(element, index) {
				if (index <= loadPost) {
					return 	<div className="card ml-4 mt-4" style={{cursor: 'pointer'}} key={index} onClick={(event) => showPostDetails(event, element.id)}>
							<div className="card-header">
								<h5 className="card-title text-left">{element.title}</h5>
							</div>
							<div className="card-body">
								<p className="card-text text-left">{element.body}</p>
							</div>
						</div>;
				}
			})
		}
		<button type="button" className="btn btn-info mt-4 mb-4 float-right" onClick={loadMore}>Load More</button>
	</>
  );
}

export default PostsComponent;