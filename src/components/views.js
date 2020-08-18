import React, {Component} from 'react'

export default class View extends Component{
	render(){
		return(
			<div>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<table className="table table-sm table-striped table-hover">
							<thead>
								<tr>
									<th>name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Events</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Name</td>
									<td>Email</td>
									<td>Phone</td>
									<td>
										<div className="btn-group hover-display">
											<a href="#" className="btn btn-sm btn-primary">edit</a>
											<a href="#" className="btn btn-sm btn-danger">delete</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}