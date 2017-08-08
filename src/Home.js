import React, { Component } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Home extends Component {
		constructor(){
		super();
	this.state={
		index:null
		}
	};
		componentDidMount(match) {
		$.ajax({
			type: "post",
			url: "http://localhost:8200/news/news2",
			data:{id:this.props.match.params.id},
			success: function(e) {
				this.setState({
					index:e[0].content
				})
			}.bind(this),
			error: function() {
				console.log("666")
			}
		});

		}
	  render(){
	  		return(
		  <div>{this.state.index}</div>
	)
	  }


}
export default Home