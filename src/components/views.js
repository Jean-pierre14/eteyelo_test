import React, {Component} from 'react'

export default class View extends Component{
	render(){
		return(
			<div>
			<table className="table table-sm">
				<thead>
					<tr>
						<th>Username</th>
						<th>Second name</th>
						<th>Email</th>
						<th>Events</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Username</td>
						<td>Second name</td>
						<td>email</td>
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
		)
	}
}