import React, { createContext, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from "./api_integration/blogActions";

export const BlogDataContext = createContext({});

function BlogDataContextProvider(props) {
	
	const [posts, setPosts] = useState([]);
	const [showMyPosts, setShowMyPosts] = useState(true);
	const [myPosts, setMyPosts] = useState([]);
	const [selectedPostId, setSelectedPostId] = useState(0);
	const [selectedPostTitle, setSelectedPostTitle] = useState('');
	const [selectedPostBody, setSelectedPostBody] = useState('');
	const [selectedPostUserId, setSelectedPostUserId] = useState(0);
	
	useEffect(() => {
		props.blogActions.getPosts();
		props.blogActions.getMyPosts();
	}, []);
  
	useEffect(() => {
		if (props.posts && props.posts.length !== 0) {
			setPosts(props.posts);
		}
	}, [props.posts]);
	
	useEffect(() => {
		if (props.myPosts && props.myPosts.length !== 0) {
			setMyPosts(props.myPosts);
		}
	}, [props.myPosts]);
	
	function toggleShowMyPost() {
		setShowMyPosts(!showMyPosts);
	}
	
	function addPost(post) {
		if (post) {
			props.blogActions.addPost(post);
		}
	}
	
	function setSelectedPost(post) {
		if (post) {
			setSelectedPostId(post?.id);
			setSelectedPostTitle(post?.title);
			setSelectedPostBody(post?.body);
			setSelectedPostUserId(post?.userId);
		}
	}
	
	function updatePost(id, post) {
		if (id && post) {
			props.blogActions.updateMyPost(id, post);
		}
	}
	
	function removePost(id) {
		if (id) {
			props.blogActions.deleteMyPost(id);
			setMyPosts(myPosts.filter(function(element, index) {
				return (element.id !== id);
			}));
		}
	}
	  
	return (
		<BlogDataContext.Provider 
		value={{ 
				posts, 
				showMyPosts, 
				myPosts, 
				toggleShowMyPost,
				addPost,
				selectedPostId,
				selectedPostTitle,
				selectedPostBody,
				selectedPostUserId,
				setSelectedPost,
				updatePost,
				removePost
			}}
		>
		  {props.children}
		</BlogDataContext.Provider>
	);
};

const mapStateToProps = (state) => ({
    posts: state.blogReducer.posts,
	myPosts: state.blogReducer.myPosts
});
  
const mapDispatchToProps = (dispatch) => ({
    blogActions: bindActionCreators(blogActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDataContextProvider);