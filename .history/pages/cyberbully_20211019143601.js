import Header from '../components/Header';
import Footer from '../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'
import "firebase/database";

function Cyberbullying() {
	const { user } = useAuth();
	const router = useRouter();
	const db = firebase.database();
	// const ref = db.ref('Quizzes')
// const ref = db.ref('server/saving-data/fireblog');

const quiz1Ref = db.ref.child('quiz1');
quiz1Ref.set({
  questions: 'What percent of students report cyberbullying',
  choices: [{
    text: '19',
    id: 1
  },
  {
    text: '60',
    id: 2
  },
  {
    text: '3',
    id: 3
  },
  {
    text: '10',
    id: 4
  },
],
correctAnswer: 4, 
});
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Cridgets|Cyberbullying </title></Head>
			<Header/>
			<div><Footer/></div>

			
		</div>
	)
}

export default Cyberbullying