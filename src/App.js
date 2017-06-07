import React, { Component } from 'react';
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import Details from "./details";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

class App extends Component {

	state = {
		name: "",
		repos: ""
	}

	searchResponse = ({name,repos})=>{
		this.setState({
			name,
			repos
		});
	}

	setResults = ()=>{
		let results = <SearchResults name={this.state.name} repos={this.state.repos} />;
		if(this.state.name==="") {
			results = <p style={{display:"none"}}></p>;
		}
		return results;
	}

	goHome = (history)=>{
		history.push("/");
		this.setState({
			name:"",
			repos:""
		});
	}

  	render() {
	    return (
	    	<Router>
		      	<div className="App">
		      		<h1 style={{display:"inline-block"}}>Github Viewer</h1>
			    	<Route path="/repos/:id" render={({history})=>{
			    		return <button onClick={()=>{
			    			this.goHome(history);
			    		}} style={{display:"inline-block",marginLeft:"60%"}}>Home</button>;
			    	}} />
			        <hr />

		      		<Route exact path="/" render={(props)=>{
		      			return (
		      				<div>
			      				<SearchForm passData={this.searchResponse} />
						        <div style={{textAlign:"center"}}>
						        	{this.setResults()}
						        </div>
					    	</div>);
			    	}} />

			    	<Route path="/repos/:id" render={({location})=>{
			    		return (<div style={{textAlign:"center"}}>
			    			<Details repoName={location.repoName} stars={location.stars} forks={location.forks} lang={location.lang} />
					    </div>);
			    	}} />

		      	</div>
	      	</Router>
	    );
  	}
}

export default App;