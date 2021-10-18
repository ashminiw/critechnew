import React, { useState, useEffect } from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database';
import { useAuth } from '../auth';
import 'firebase';

export default function UserInfo() {
	// const firstName = document.getElementById('firstName')
	// const lastName = document.getElementById('lastName')
	// const year = document.getElementById('year')
	// const about = document.getElementById('about')
	// const mood = document.getElementById('mood')
	// const addBtn = document.getElementById('addBtn')
	// const updateBtn = document.getElementById('updateBtn')
	// const removeBtn = document.getElementById('removeBtn')

	const [firstName, setFirstName] = useState('');
  	const [lastName, setLastName] = useState('');

	const usersRef = firebase.database().ref.child('users')
	addBtn.addEventListener('click', (e) => {
		e.preventDefault();
		database.ref('/users/' + firstName.value).set({
			first_name: firstName.value,
			last_name: lastName.value,
			// year: year.value,
			// about: about.value,
			// mood: mood.value,

		})
	}
	)


	return(
		<div>
			<form>
				<label for="firstName"> First Name </label>
				<input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
        placeholder={'First Name'} ></input><br></br>
				<label for="lastName"> Last Name </label>
				<input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
        placeholder={'Last Name'}></input><br></br>
				{/* <label for="year"> Year </label>
				<input type="text" name="year" id="year"></input><br></br>
				<label for="about"> About </label>
				<input type="text" name="about" id="about"></input><br></br>
				<label for="mood"> Mood </label>
				<input type="text" name="mood" id="mood"></input><br></br> */}
				<button id="addBtn"> Add </button>
				{/* <button id="updateBtn">Update</button>
				<button id="removeBtn"> Remove </button> */}
			
			</form>
		</div>

	);
}
