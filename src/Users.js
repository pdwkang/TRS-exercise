import React, { Component } from 'react';
import $ from 'jquery'

class EachUser extends Component{
	constructor(props) {
		super(props);
		this.userRoute = this.userRoute.bind(this)
	}
    userRoute(){
    	this.props.router.push('/user/' + this.props.user.id)
    }	
	render(){
		return(
			<div onClick={this.userRoute}>
				<h3>{this.props.user.name}</h3>
				<h5>{this.props.user.company.name}</h5>			
			</div>
		)
	}
}
class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users : [],
			current_user: '',
			usersHTML: ''
		}
		
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentDidMount() {
		$.getJSON('http://jsonplaceholder.typicode.com/users', (userData)=>{
				// console.log(userData)
			var users = [];
			userData.map((user, index)=>{
				users.push(
					<div key={index} style={{marginTop:60}}>
						<EachUser router={this.props.router} user={user} />
					</div>
				)
			})
			this.setState({
				usersHTML : users
			})
		})		
	}

	render() {
	    return (
	      <div>
	      	<h1>Users</h1>
	      	{this.state.usersHTML}
	      </div>
	    );
  	}
}

export default Users;
