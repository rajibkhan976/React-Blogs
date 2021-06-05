import { combineReducers } from 'redux';

const initialState = {
    posts: [],
	myPosts: [],
	postDetails: [],
	postComments: [],
	users: [],
	userPosts: []
};

const blogReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_ALL_POSTS':

        return { 
            ...state, 
            posts: action.data
        };

        case 'ADD_NEW_POST':

        return { 
            ...state,
            addPostResponse: action.data
        }

        case 'GET_MY_POSTS':

        return { 
            ...state, 
            myPosts: action.data
        };

        case 'UPDATE_MY_POST':

        return { 
            ...state,
            updatePostResponse: action.data
        };

        case 'DELETE_MY_POST':

        return { 
            ...state, 
            deletePostResponse: action.data
        };

        case 'GET_POST_DETAILS':

        return { 
            ...state,
            postDetails: action.data
        };
		
		case 'GET_COMMENTS':

        return { 
            ...state,
            postComments: action.data
        };
		
		case 'GET_USERS':

        return { 
            ...state,
            users: action.data
        };
		
		case 'GET_USERS_POSTS':

        return { 
            ...state,
            userPosts: action.data
        };

        default:

        return state;
    }
}

export default combineReducers({ blogReducer });