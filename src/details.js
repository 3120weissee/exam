import React from "react";

class Details extends React.Component {
	render() {
		let tHead = {backgroundColor:"grey",margin:0,padding:0,textAlign:"left"};
		let tBody = {backgroundColor:"lightgrey",margin:0,padding:0,textAlign:"left"};
		return (
			<div>
				<h2>repo details</h2>
				<div>
					<div style={{display:"inline-block",border:"thin solid black"}}>
						<div style={tHead}>Stars</div>
						<div style={tBody}>32</div>
					</div>
					<div style={{display:"inline-block",border:"thin solid black"}}>
						<div style={tHead}>Forks</div>
						<div style={tBody}>6</div>
					</div>
					<div style={{display:"inline-block",border:"thin solid black"}}>
						<div style={tHead}>Primary Language</div>
						<div style={tBody}>JavaScript</div>	
					</div>				
				</div>
			</div>
		);
	}
}

export default Details;