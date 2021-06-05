import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";

function PostsComponent(props) {
	
  const { posts } = useContext(BlogDataContext);
  
  const [loadPost, setLoadPost] = useState(9);
  
  function loadMore() {
	  if (loadPost <= 99) {
		  setLoadPost(loadPost + 10);
	  }
  }
  
  console.log(loadPost)
  
  return (
	<>
		<h3 className="text-left mt-4 mb-4">Blog Posts</h3>
		{posts && posts.length !== 0 &&
			posts.map(function(element, index) {
				if (index <= loadPost) {
					return 	<div className="card mt-4" key={index}>
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
		<button className="btn btn-info mt-4 mb-4 float-right" onClick={loadMore}>Load More</button>
	</>
  );
}

export default PostsComponent;