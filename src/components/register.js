import React, { Component } from 'react'
import axios from 'axios'

export default class Insert extends Component{
	constructor(props){
			super(props)
			this.onChangeUsername = this.onChangeUsername.bind(this);
			this.onChangeEmail = this.onChangeEmail.bind(this);
			this.onChangePassword = this.onChangePassword.bind(this);
			this.onSubmit = this.onSubmit.bind(this);

			this.state = {
				username: '',
				email: '',
				pass: ''
			}
	}
	// Getting my fields
	onChangeUsername(e){
		this.setState({
			username: e.target.value
		})
	}

	onChangeEmail(e){
		this.setState({
			email: e.target.value
		})
	}
	onChangePassword(e){
		this.setState({
			pass: e.target.value
		})
	} 

	onSubmit(e){
		e.preventDefault();
		const obj = {
			username: this.state.username,
			email: this.state.email,
			pass: this.state.pass
		}
		// console.log(obj)
		axios.post('http://localhost/eteyelo/register.php', obj)
		.then(res => console.log(res.data))

		// to clear our form
		this.setState({
			username: '',
			email: '',
			pass: ''
		})
	}

	render(){
		return(
			<div>
				<h1 className="text-success">Add user</h1>
				<form onSubmit={this.onSubmit}> 
					<div className="form-group">
						<label>Username</label>
						<input type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="Username" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email@eteyelo.com" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" value={this.state.pass} onChange={this.onChangePassword}placeholder="Password" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" className="btn btn-success" value="Register"/>
					</div>
				</form>
			</div>
		)
	}
}