// import Header from '../components/Header';
// import Footer from '../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
// import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'

function Cyberbully() {
	const { user } = useAuth();
	const router = useRouter();

	const transformToArray = (questions) => Object.keys(questions).map((key) => ({
		id: key,
		...questions[key]
	})); 

	let cachedQuestions;
	const getAllQuestions = async () => {
		if (cachedQuestions) {
			return cachedQuestions;
		}
	

	const database = firebase.database();
	const snapshot = database.ref("/Modules/Cyberbullying/Quizzes/Quiz1/quiz").once('value');
	const questions = transformToArray(snapshot.val())
	cachedQuestions = questions;
	return questions;
	};


	const getRandomQuestions = async() => {
		const questions = await getAllQuestions();
		const randomQuestions = sampleSize(questions, 10);
		
		return randomQuestions.map(questions => ({
			...questions,
			choices: shuffle(questions.choices)
		}))	
	}
	
		// return randomQuestions.map(questions => ({
		// 	...questions,
		// 	choices: shuffle(questions.choices)
		// }))
		// <div className="flex flex-col min-h-screen bg-green-500">
		// 	<Head><title> Cridgets|Cyberbully </title></Head>
		// 	<Header/>
		// 	<div><Footer/></div>

			
		// </div>

		


}

export default Cyberbully;
export { getRandomQuestions() }