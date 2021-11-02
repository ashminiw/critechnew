// import Header from '../components/Header';
// import Footer from '../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
// import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'
import { firebaseClient } from "../../../firebaseClient"


	const transformToArray = (questions) => Object.keys(questions).map((key) => ({
		id: key,
		...questions[key]
	})); 

	let cachedQuestions;
	const getAllQuestions = async () => {
		if (cachedQuestions) {
			return cachedQuestions;
		}
	
	if (!firebase.apps.length) {
			firebase.initializeApp({
			apiKey: "AIzaSyDi5sg5b-IL3TwLZ6LWsJqdaeywYb8WtRA",
			authDomain: "critech-prototype-init.firebaseapp.com",
			projectId: "critech-prototype-init",
			      });
			}
	const database = firebase.database();
	const snapshotref = database.ref("/Modules/Cyberbullying/Quizzes/Quiz1/quiz");
	snapshotref.on('value', (snapshot) => {
	const questions = transformToArray(snapshot.val())
	cachedQuestions = questions;
	return questions;});
	// return questions;
	};


	const getRandomQuestions = async() => {
		const questions = await getAllQuestions();
		const randomQuestions = sampleSize(questions, 2);
		
		return randomQuestions.map(questions => ({
			...questions,
			choices: shuffle(questions.choices)
		}))	
	};
	
		// return randomQuestions.map(questions => ({
		// 	...questions,
		// 	choices: shuffle(questions.choices)
		// }))
		// <div className="flex flex-col min-h-screen bg-green-500">
		// 	<Head><title> Cridgets|Cyberbully </title></Head>
		// 	<Header/>
		// 	<div><Footer/></div>

			
		// </div>

		



export { getRandomQuestions }