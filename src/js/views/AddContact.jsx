import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
export default class AddContact extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			unicorn: "",
			storm: "",
			place: "",
			fire: ""
		};
	}
	
	render() {
		
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" className="form-control" placeholder="Full Name" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.unicorn}
								onChange={event => {
									this.setState({
										unicorn: event.target.value
									});
								}} />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.storm}
								onChange={event => {
									this.setState({
										storm: event.target.value
									});
								}}/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.place}
								onChange={event => {
									this.setState({
										place: event.target.value
									});
								}}/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" autoFocus={true}
								
								
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
								
								value={this.state.fire}
								onChange={event => {
									this.setState({
										fire: event.target.value
									});
								}}/>
						</div>
						<Context.Consumer>
							{({ store, actions }) => {
							
							var selectedContact = store.contacts.filter((item) => {
								return item.id === pageId;
							});
							
							return (
								<div>
									<button type="button" className="btn btn-primary form-control" 
										onClick={() => {
											const contact = {
												full_name:this.state.unicorn, email:this.state.storm, phone:this.state.place, address:this.state.fire
											};
											actions.addContact(contact);
											
										}
											
										} 
								>save</button>
								
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
