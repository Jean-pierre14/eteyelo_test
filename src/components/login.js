import React, {Component} from 'react'

export default class Login extends Component{
	render(){
		return(
			<div>
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="card shadow">
							<div className="card-body">
								<form>
									<div className="form-row">
										<div className="form-group col-md-12">
											<label>Username</label>
											<input type="text" name="username" placeholder="Username" className="form-control"/>
										</div>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input type="password" name="password" placeholder="Password" className="form-control"/>
									</div>
									
									<div className="form-group">
										<button type="submit" className="btn btn-block btn-success">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}