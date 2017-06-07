import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class SearchForm extends React.Component {
	state = {
		value:"3120weissee",
		searchError:false
	}

	handleChange = ({target:{value}})=>{
		this.setState({
			value
		});
	}

	submitForm = (e)=>{
		e.preventDefault();
		axios.get(`https://api.github.com/users/${e.target.children[0].value}`)
			.then(({data:{login,repos_url}})=>{
				this.props.passData({name:login,repos:repos_url});
				this.setState({
					searchError:false
				})
			})
			.catch((error)=>{
				this.setState({
					searchError:true
				});
			});
		this.setState({
			value:""
		});
	}

	setSubmitButton = ()=>{
		let submitButton = <input type="submit" disabled value="Search" style={{width:"100%",marginBottom:15}} />;
		if(this.state.value!=="") {
			submitButton = <input type="submit" value="Search" style={{width:"100%",marginBottom:15}} />;
		}
		return submitButton;
	}

	setWarning = ()=>{
		let warning = <p style={{display:"none"}}></p>;
		if(this.state.searchError) {
			warning = <p style={{backgroundColor:"pink",color:"red",textAlign:"left",paddingLeft:10}}>Unknown Username!</p>;
		}
		return warning;
	}

	render() {
		return (
			<div style={{width:300,textAlign:"center",margin:"auto auto"}}>
				<hr />
				{this.setWarning()}
				<p>Search Repositories by Username</p>
				<form onSubmit={this.submitForm}>
					<input type="'text" value={this.state.value} onChange={this.handleChange} style={{width:"98%",marginBottom:10}}/>
					<br />
					{this.setSubmitButton()}
				</form>
				<hr />
			</div>
		);
	}
}

SearchForm.propTypes = {
	passData: PropTypes.func.isRequired
}

export default SearchForm;