import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
export default class editElement extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			red: "",
			white: "",
			blue: "",
			yellow: ""
		};
	}
	
	render() {
		
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Edit contact</h1>
					
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" className="form-control" placeholder="Full Name" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.red}
								onChange={event => {
									this.setState({
										red: event.target.value
									});
								}} />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.white}
								onChange={event => {
									this.setState({
										white: event.target.value
									});
								}}/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.blue}
								onChange={event => {
									this.setState({
										blue: event.target.value
									});
								}}/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.yellow}
								onChange={event => {
									this.setState({
										yellow: event.target.value
									});
								}}/>
						</div>
						<Context.Consumer>
							{({ actions }) => {
							return (
								<div>
									<button type="button" className="btn btn-primary form-control" 
										onClick={() => {
											const contact = {
												full_name:this.state.red, e_mail:this.state.white, phone:this.state.blue, address:this.state.yellow
											};
											actions.editElement(contact);
											
										}
											
										} 
								>Update Contact</button>
								
									<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
								</div>
							);
						}}
						</Context.Consumer>
						
						
					</form>
				</div>
			</div>
		);
	}
}