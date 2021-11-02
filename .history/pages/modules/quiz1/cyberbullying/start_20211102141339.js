import Header from '../../../../components/Header';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css"

function start() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">

			<Header/>
			
			<p className="flex items-center justify-center text-center text-5xl text-white text-bold">Welcome to the Cyberbullying Module</p>
			<br></br>
			<p>Cyberbullying is the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.</p>
			<p>Test how much you know about cyberbullying!</p>
			<br></br>
		<div className="flex items-center justify-center">
			<button className="w-1/4 bg-purple-500 hover:bg-green-900 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-green-800 rounded" onClick={() => router.push('../quizcomp/QuizMain')}>Start Post Quiz</button>
</div>


		</div>

			
		
	)
}

export default start
