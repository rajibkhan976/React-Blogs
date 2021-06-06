import React, { useState, useEffect, useContext } from 'react';
import { BlogDataContext } from "../BlogDataContextProvider";
import Pagination from 'react-bootstrap/Pagination';

function UsersComponent(props) {
	
  const { users } = useContext(BlogDataContext);
  
  const [usersList, setUsersList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortKeyword, setSortKeyword] = useState("");
  const [pageSize, setPageSize] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  
  useEffect(() => {
	  if (users && users.length !== 0) {
		  setUsersList(users);
		  setPageSize(users.length);
		  setEndIndex(users.length);
	  }
  }, [users]);
  
  function handleChnage(event) {
	  if (event.target.id === "sortKeyword") {
		  setSortKeyword(event.target.value);
	  }
	  if (event.target.id === "searchKeyword") {
		  setSearchKeyword(event.target.value);
	  }
	  if (event.target.id === "pageSize") {
		  setPageSize(event.target.value);
		  if (event.target.value !== "All") {
			  setEndIndex(parseFloat(event.target.value));
		  }
	  }
  }
  
  useEffect(() => {
	  if (searchKeyword && searchKeyword.trim()) {
		  var regex = new RegExp(searchKeyword.trim(), 'gi');
		  setUsersList(usersList.filter(function(element, index) {
			  return (element.name.search(regex) !== -1 ||
						element.email.search(regex) !== -1 ||
						element.website.search(regex) !== -1
					);
		  }));
	  }
  }, [searchKeyword]);
  
  useEffect(() => {
	  if (sortKeyword && sortKeyword.trim() && sortKeyword.trim() === "name") {
		  var sortedUserList = [];
		  usersList.sort(function(a, b) {
			  var nameA = a.name.toUpperCase();
			  var nameB = b.name.toUpperCase();
			  if (nameA < nameB) {
				return -1;
			  }
			  if (nameA > nameB) {
				return 1;
			  }
			  return 0;
		  }).forEach(function (element) { sortedUserList.push(element)});
		  setUsersList(sortedUserList);
	  }
	  if (sortKeyword && sortKeyword.trim() && sortKeyword.trim() === "email") {
		  var sortedUserList = [];
		  usersList.sort(function(a, b) {
			  var nameA = a.email.toUpperCase();
			  var nameB = b.email.toUpperCase();
			  if (nameA < nameB) {
				return -1;
			  }
			  if (nameA > nameB) {
				return 1;
			  }
			  return 0;
		  }).forEach(function (element) { sortedUserList.push(element)});
		  setUsersList(sortedUserList);
	  }
  }, [sortKeyword]);
  
  useEffect(() => {
	  if (pageSize && pageSize === "All") {
		  setPageSize(usersList.length);
		  setEndIndex(usersList.length);
	  }
  }, [pageSize]);
  
  function pageLoader(event) {
	  if (event && pageSize) {
		  if (parseFloat(event.target.id) === 1) {
			  setStartIndex(0);
		  } else {
			  setStartIndex((parseFloat(event.target.id) * parseFloat(pageSize)) - parseFloat(pageSize));
		  }
		  setEndIndex(parseFloat(event.target.id) * parseFloat(pageSize));
	  }
  }
  
  function createPagination() {
	  if (pageSize && usersList.length >= 3 && parseFloat(pageSize) < 6) {
		  var pageItems = [];
		  for(var c = 1; c < Math.ceil(usersList.length / parseFloat(pageSize)) + 1; c++) {
			  pageItems.push(<Pagination.Item id={c} key={c} onClick={pageLoader}>{c}</Pagination.Item>);
		  }
		  var pagination = 	<div className="row mt-4 d-flex justify-content-center align-items-center">
								<div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
									<Pagination>
										{pageItems}
									</Pagination>
								</div>
							</div>;
		  return pagination;
	  } else {
		  return null;
	  }
  }
  
  return (
	<div className="row">
		<div className="col-12">
			<h3 className="text-left mt-4 mb-4">Users</h3>
			<div className="row">
				<div className="col-sm-12 col-md-4">
					<div className="mb-3">
						<label htmlFor="sortKeyword" className="form-label float-left">Sort</label>
						<select className="form-select form-control" id="sortKeyword" onChange={handleChnage} value={sortKeyword} aria-label="Default select example">
						  <option value="Select">Select</option>
						  <option value="name">name</option>
						  <option value="email">email</option>
						</select>
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<div className="mb-3">
					  <label htmlFor="searchKeyword" className="form-label float-left">Search</label>
					  <input type="text" className="form-control" id="searchKeyword" onChange={handleChnage} value={searchKeyword} required />
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<div className="mb-3">
						<label htmlFor="pageSize" className="form-label float-left">Items per page</label>
						<select className="form-select form-control" id="pageSize" onChange={handleChnage} value={pageSize} aria-label="Default select example">
						  <option value="Select">Select</option>
						  <option value={3}>3</option>
						  <option value={5}>5</option>
						  <option value="All">All</option>
						</select>
					</div>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table table-striped">
				  <thead className="table-dark">
					<tr>
					  <th scope="col">Name</th>
					  <th scope="col">Email</th>
					  <th scope="col">Website</th>
					</tr>
				  </thead>
				  <tbody>
				  {usersList && usersList.length !== 0 &&
					usersList.slice(startIndex, endIndex).map(function(element, index) {
						return <tr key={index}>
								  <td>{element.name}</td>
								  <td>{element.email}</td>
								  <td>{element.website}</td>
								</tr>;
					})
				  }
				  </tbody>
				</table>
			</div>
			{createPagination()}
		</div>
	</div>
  );
}

export default UsersComponent;