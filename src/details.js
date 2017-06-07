import React from "react";
import PropTypes from "prop-types";

const Details = (props) => {
	let tHead = {backgroundColor:"grey",margin:0,padding:0,textAlign:"left"};
	let tBody = {backgroundColor:"lightgrey",margin:0,padding:0,textAlign:"left"};
	return (
		<div>
			<h2>{props.repoName} details</h2>
			<div>
				<div style={{display:"inline-block",border:"thin solid black"}}>
					<div style={tHead}>Stars</div>
					<div style={tBody}>{props.stars}</div>
				</div>
				<div style={{display:"inline-block",border:"thin solid black"}}>
					<div style={tHead}>Forks</div>
					<div style={tBody}>{props.forks}</div>
				</div>
				<div style={{display:"inline-block",border:"thin solid black"}}>
					<div style={tHead}>Primary Language</div>
					<div style={tBody}>{(props.lang ? props.lang : "N/A")}</div>	
				</div>				
			</div>
		</div>
	);
}

Details.propTypes = {
	repoName: PropTypes.string,
	stars: PropTypes.number,
	forks: PropTypes.number,
	lang: PropTypes.string
}

export default Details;