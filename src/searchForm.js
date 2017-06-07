import React from "react";

class SearchForm extends React.Component {
	render() {
		return (
			<div style={{width:300,textAlign:"center",margin:"auto auto"}}>
				<hr />
				<p style={{backgroundColor:"pink",color:"red",textAlign:"left",paddingLeft:10}}>Unknown Username!</p>
				<p>Search Repositories by Username</p>
				<form>
					<input type="'text" style={{width:"98%",marginBottom:10}}/>
					<br />
					<input type="submit" value="Search" style={{width:"100%",marginBottom:15}} />
				</form>
				<hr />
			</div>
		);
	}
}

export default SearchForm;