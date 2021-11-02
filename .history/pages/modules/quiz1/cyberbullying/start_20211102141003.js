import Header from '../../../../components/Header';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css"

function start() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">

			<Header/>
			
			<p className="flex items-center justify-center text-center">Welcome to the Cyberbullying Module</p>
			<br></br>
			<p>Cyberbullying is the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.</p>
			<p>Test how much you know about cybeerbullying!</p>
			<btn onClick={() => router.push('../quizcomp/QuizMain')}>Start Post Quiz</btn>



		</div>

			
		
	)
}

export default start
