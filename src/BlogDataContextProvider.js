import React, { createContext, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from "./api_integration/blogActions";

export const BlogDataContext = createContext({});

function BlogDataContextProvider(props) {
	
	const [posts, setPosts] = useState([]);
	const [showMyPosts, setShowMyPosts] = useState(true);
	const [myPosts, setMyPosts] = useState([]);
	const [postDetails, setPostDetails] = useState(null);
	const [postComments, setPostComments] = useState([]);
	const [users, setUsers] = useState([]);
	const [selectedPostId, setSelectedPostId] = useState(0);
	const [selectedPostTitle, setSelectedPostTitle] = useState('');
	const [selectedPostBody, setSelectedPostBody] = useState('');
	const [selectedPostUserId, setSelectedPostUserId] = useState(0);
	
	useEffect(() => {
		props.blogActions.getPosts();
		props.blogActions.getMyPosts();
		props.blogActions.getUsers()
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
	
	useEffect(() => {
		if (props.users && props.users.length !== 0) {
			setUsers(props.users);
		}
	}, [props.users]);
	
	function toggleShowMyPost() {
		setShowMyPosts(!showMyPosts);
	}
	
	function reSetSelectedPost() {
		setSelectedPostId(0);
		setSelectedPostTitle("");
		setSelectedPostBody("");
		setSelectedPostUserId(0);
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
	
	function fetchPostDetails(id) {
		if (id) {
			props.blogActions.getPostDetails(id);
		}
	}
	
	useEffect(() => {
		if (props.postDetails && props.postDetails.length !== 0) {
			setPostDetails(props.postDetails);
		}
	}, [props.postDetails]);
	
	function fetchPostComments(id) {
		if (id) {
			props.blogActions.getCommentsByPostId(id);
		}
	}
	
	useEffect(() => {
		if (props.postComments && props.postComments.length !== 0) {
			setPostComments(props.postComments);
		}
	}, [props.postComments]);
	  
	return (
		<BlogDataContext.Provider 
		value={{ 
				posts, 
				showMyPosts, 
				myPosts, 
				toggleShowMyPost,
				reSetSelectedPost,
				addPost,
				selectedPostId,
				selectedPostTitle,
				selectedPostBody,
				selectedPostUserId,
				setSelectedPost,
				updatePost,
				removePost,
				fetchPostDetails,
				postDetails,
				fetchPostComments,
				postComments,
				users
			}}
		>
		  {props.children}
		</BlogDataContext.Provider>
	);
};

const mapStateToProps = (state) => ({
    posts: state.blogReducer.posts,
	myPosts: state.blogReducer.myPosts,
	addPostResponse: state.blogReducer.addPostResponse,
	updatePostResponse: state.blogReducer.updatePostResponse,
	deletePostResponse: state.blogReducer.deletePostResponse,
	postDetails: state.blogReducer.postDetails,
	postComments: state.blogReducer.postComments,
	users: state.blogReducer.users,
	userPosts: state.blogReducer.userPosts
});
  
const mapDispatchToProps = (dispatch) => ({
    blogActions: bindActionCreators(blogActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDataContextProvider);