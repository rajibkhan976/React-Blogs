import React, { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import PostsComponent from "./components/PostsComponent";
import MyProfileComponent from "./components/MyProfileComponent";
import UsersComponent from "./components/UsersComponent";
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
