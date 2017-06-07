import React from "react";

class SearchResults extends React.Component {
	render() {
		return (
			<div style={{textAlign:"center",display:"inline-block"}}>
				<h2>name's repositories</h2>
				<p>Filter repos by primary language</p>
				<select>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<div style={{margin:0,padding:0,textAlign:"left"}}>
					<div style={{backgroundColor:"grey"}}>Name</div>
					<div style={{backgroundColor:"lightgrey"}}><a href="">repo1</a></div>
					<div style={{backgroundColor:"white"}}><a href="">repo2</a></div>
					<div style={{backgroundColor:"lightgrey"}}><a href="">repo3</a></div>
				</div>
			</div>
		);
	}
}

export default SearchResults;