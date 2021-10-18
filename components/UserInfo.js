import React, { useState, useEffect } from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import { useAuth } from '../auth';

export default function UserInfo() {


	const [firstName, setFirstName] = useState('');
  	const [lastName, setLastName] = useState('');
	const [year, setYear] = useState('');
	const [about, setAbout] = useState('');
	const [mood, setMood] = useState('');

	const createUser = () => {
		const userRef = firebase.database().ref('User');
		const userinfo = {
		  firstName,
		  lastName,
		  year,
		  about, 
		  mood,
		};
	    
		userRef.push(userinfo)
      };


	return(
		<div>
			<form>
				<label for="firstName"> First Name </label>
				<input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
        placeholder={'First Name'} ></input><br></br>
				<label for="lastName"> Last Name </label>
				<input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
        placeholder={'Last Name'}></input><br></br>
				<label for="year"> Year </label>
				<input type="text" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)}
        placeholder={'Year'}></input><br></br>
				<label for="about"> About </label>
				<input type="text" name="about" id="about" value={about} onChange={(e) => setAbout(e.target.value)}
        placeholder={'About'}></input><br></br>
				<label for="mood"> Mood </label>
				<input type="text" name="mood" id="mood" value={mood} onChange={(e) => setMood(e.target.value)}
        placeholder={'Mood'}></input><br></br>
				<button id="addBtn" onClick={createUser}> Update </button>
				{/* <button id="updateBtn">Update</button>
				<button id="removeBtn"> Remove </button> */}
			
			</form>
		</div>

	);
}
