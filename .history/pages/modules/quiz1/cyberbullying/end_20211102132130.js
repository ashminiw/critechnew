import Header from '../../../../components/Header';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css"

function end() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">

			<Header/>
			
			<p className="text-lg text-white">END PAGE</p>
			<br></br>
			<btn onClick={() => router.push('../postquiz/QuizMain')}>Start Post Quiz</btn>



		</div>

			
		
	)
}

export default end