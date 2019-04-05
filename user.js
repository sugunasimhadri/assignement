import React, { Component } from 'react';
import './user.css'




class User extends Component{
	state={
		Firstname: '',
		Lastname: '',
		EmailID: '',
		Age:'',
		Sex:'',
		Register: false,
		


	}
	user(event){
		event.preventDefault();

		
	}



	render(){
		return(
		<div> 
		

			<form>
		
			<li>
			<label>Firstname:</label>
			<input type="text" id="Firstname" name="Firstname" placeholder="FirstName"/>
			
			<label>Lastname:</label>
			<input type="text" id="Lastname" name="Lastname" placeholder="LastName" />
			<label>EmailID:</label>
			<input type="text" id="emailid" name="EmailID" placeholder="EmailID"/>
			
			<label>Age:</label>
			<input type="text" id="age" name="Age" placeholder="Age"/>
			
			<label>Sex:</label>
			<input type="text" id="sex" name="Sex" placeholder="Sex"/>
			
			
		
			
			<input type="submit" value="AddUser"/>
			</li>

			</form>
		</div>
	);

	}


}


export default User;