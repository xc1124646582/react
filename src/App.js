import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
class App extends Component {
			constructor(){
		super();
	this.state={
		arr:[],
		index:null
		}
	};
			componentDidMount() {
			$.ajax({
			type: "get",
			url: "http://localhost:8200/news/news1",
			success: function(e) {
				this.setState({
					arr:e
				})
			}.bind(this),
			error: function() {
				console.log("666")
			}
		});
		}
			clearset=function(event){
				var aa=event.target.parentElement.firstElementChild.innerHTML
			$.ajax({
			type: "post",
			url: "http://localhost:8200/news/dlnews",
			data:{id:aa},
			success: function(e) {
this.setState({
					arr:e
				})
			}.bind(this),
			error: function() {
				console.log("666")
			}
		});
			
			}.bind(this)
			upset=function(event){
			var aa=event.target.parentElement.firstElementChild.innerHTML
			$(".homes").css("display","block")
			this.setState({
			index:aa
			})
			console.log(aa)
			for(var i = 0; i < this.state.arr.length; i++) {
				if(this.state.arr[i].id == aa) {
					$("#text1").val(this.state.arr[i].title)
					$("#text2").val(this.state.arr[i].content)
				}
			}
		}.bind(this)
		qdnn=function(){
		$.ajax({
			type: "post",
			url: "http://localhost:8200/news/upnews",
			data:{id:this.state.index,title:$("#text1").val(),content:$("#text2").val()},
			success: function(e) {
			this.setState({
					arr:e
				})
			$(".homes").css("display","none")
			}.bind(this),
			error: function() {
				console.log("666")
			}
		});

		}.bind(this)
		qxnn=function(){
			$(".homes").css("display","none")
		}
  render() {
    return (
		  <Router>
    	<div>
    	<Route path="/:id" component={Home}/>
    	<Route exact path="/" render={() => (
    		<div>
    		{this.state.arr.map(function(v,i){
    			return  <p key={i} className="li"><span className="span">{v.id}</span><Link to={`/${v.id}`}>{v.title}</Link><button onClick={this.upset}>修改</button><button onClick={this.clearset}>删除</button></p>
    		}.bind(this))}
    		</div>
    		 )}/>
    		<div className="homes">
	        			<div>
				        	<h2>修改</h2>
				        	<p><input type="text" id="text1"/></p>
				        	<p><input type="text" id="text2"/></p>
				        	<p><button onClick={this.qdnn}>确定</button> <button onClick={this.qxnn}>取消</button></p>
	        			</div>
		        	</div>
</div>
  </Router>
    );
  }
}

export default App;
