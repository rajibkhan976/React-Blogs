import React, { createContext, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from "./api_integration/blogActions";

export const BlogDataContext = createContext({});

function BlogDataContextProvider(props) {
	
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		props.blogActions.getPosts();
	}, []);
  
	useEffect(() => {
		if (props.posts && props.posts.length !== 0) {
			setPosts(props.posts);
		}
	}, [props.posts]);
	  
	return (
		<BlogDataContext.Provider value={{ posts }}>
		  {props.children}
		</BlogDataContext.Provider>
	);
};

const mapStateToProps = (state) => ({
    posts: state.blogReducer.posts
});
  
const mapDispatchToProps = (dispatch) => ({
    blogActions: bindActionCreators(blogActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDataContextProvider);