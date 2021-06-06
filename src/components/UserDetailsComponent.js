import React, { useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";

function UserDetailsComponent(props) {
	
	const { userDetailInfo, userPosts } = useContext(BlogDataContext);
	
	return (
		<>
			<h3 className="text-left ml-4 mt-4 mb-4">User Details</h3>
			{userDetailInfo &&
				<div className="card ml-4 mt-4 mb-4" key={userDetailInfo.id}>
					<div className="card-header">
						<h5 className="card-title text-capitalize text-left">{userDetailInfo.name}</h5>
					</div>
					<div className="card-body">
						<p className="card-text text-capitalize text-left">Email: {userDetailInfo.email}</p>
						<p className="card-text text-capitalize text-left">Phone: {userDetailInfo.phone}</p>
						<p className="card-text text-capitalize text-left">Website: {userDetailInfo.website}</p>
					</div>
				</div>
			}
			<h4 className="text-left ml-4">Posts</h4>
			{userPosts && userPosts.length !== 0 &&
				userPosts.map(function(element, index) {
					return <div className="card ml-4 mt-4" key={index}>
								<div className="card-header">
									<h5 className="card-title text-capitalize text-left">{element.title}</h5>
								</div>
								<div className="card-body">
									<p className="card-text text-capitalize text-left">{element.body}</p>
								</div>
							</div>;
				})
			}
		</>
	);
}

export default UserDetailsComponent;