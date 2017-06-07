import React, { Component } from 'react';
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import Details from "./details";

class App extends Component {
  render() {
    return (
      <div className="App">
    	<h1 style={{display:"inline-block"}}>Github Viewer</h1>
    	<button style={{display:"inline-block",marginLeft:"60%"}}>Home</button>
        <hr />
        <SearchForm />
        <div style={{textAlign:"center"}}>
        	<SearchResults />
        	<Details />
        </div>
      </div>
    );
  }
}

export default App;