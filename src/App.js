import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import PostsComponent from "./components/PostsComponent";
import MyProfileComponent from "./components/MyProfileComponent";
import UsersComponent from "./components/UsersComponent";
import PostDetailsComponent from "./components/PostDetailsComponent";
import UserDetailsComponent from "./components/UserDetailsComponent";
import BlogDataContextProvider from "./BlogDataContextProvider";

function App() {
	
  return (
	<BlogDataContextProvider>
		<Router>
			<div className="App">
				<NavbarComponent/>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route exact path="/" component={ PostsComponent } />
								<Route exact path="/posts" component={ PostsComponent } />
								<Route exact path="/myposts" component={ MyProfileComponent } />
								<Route exact path="/users" component={ UsersComponent } />
								<Route exact path="/postdetails/:id" component={ PostDetailsComponent } />
								<Route exact path="/userdetails/:id" component={ UserDetailsComponent } />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</Router>
	</BlogDataContextProvider>
  );
}

export default App;
