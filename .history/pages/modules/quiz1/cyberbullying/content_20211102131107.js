import Header from '../../../../components/Header';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css"

function content() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">

			<Header/>
			
			<p>CONTENT PAGE</p>
			<br></br>
			{/* <btn onClick={() => router.push('../quizcomp/QuizMain')}>Start Post Quiz</btn> */}



		</div>

			
		
	)
}

export default content