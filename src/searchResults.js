import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
	Link
} from "react-router-dom";

class SearchResults extends React.Component {
	state = {
		data: [],
		languages:[],
		filter:"all"
	}

	createTable = ()=>{
		axios.get(this.props.repos).then(({data})=>{
			const languages = this.getUniqueLanguages(data);
			this.setState({
				data,
				languages
			});
		}).catch(console.log);
	}

	getUniqueLanguages = (data)=>{
		const res = {};
		for(let i = 0; i < data.length; i++) {
			if(data[i].language!==null) {
				res[data[i].language] = true;
			}
		}
		return Object.keys(res);
	}

	displayRepos = ()=>{
		let items = [];
		let color = true;
		for(let i = 0; i < this.state.data.length; i++) {
			let style = {backgroundColor:"white",paddingLeft:5};
			if(color) {
				style.backgroundColor = "lightgrey";
			}
			if(this.state.filter==="all" || this.state.data[i].language===this.state.filter) {
				items.push((<div key={i} style={style}><Link to={{
					pathname:`/repos/${this.state.data[i].id}`,
					repoName:this.state.data[i].name,
					stars:this.state.data[i].stargazers_count,
					forks:this.state.data[i].forks_count,
					lang:this.state.data[i].language
				}}>{this.state.data[i].name}</Link></div>));
				color = !color;
			}
		}
		return items;
	}

	setFilter = (e)=>{
		this.setState({
			filter:e.target.value
		});
	}

	render() {
		this.createTable();
		return (
			<div style={{textAlign:"center",display:"inline-block"}}>
				<h2>{this.props.name}'s repositories</h2>
				<p>Filter repos by primary language</p>
				<select onChange={this.setFilter}>
					<option value="all">All</option>
					{this.state.languages.map((el,idx)=>{
						return (
							<option key={idx} value={el}>{el}</option>
						);
					})}
				</select>
				<div style={{margin:0,marginTop:10,padding:0,textAlign:"left"}}>
					<div style={{backgroundColor:"grey",fontWeight:"bold",paddingLeft:5}}>Name</div>
					{this.displayRepos()}
				</div>
			</div>
		);
	}
}

SearchResults.propTypes = {
	name: PropTypes.string.isRequired,
	repos: PropTypes.string.isRequired
}

export default SearchResults;