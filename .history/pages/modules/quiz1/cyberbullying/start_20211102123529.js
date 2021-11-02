import Header from '../../../../components/Header';
import { useRouter } from 'next/router';

function start() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">

			<Header/>
			
			<p>Welcome to the Cyberbullying Module</p>
			<br></br>
			<p>Cyberbullying is the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.</p>

		</div>

			
		
	)
}

export default start
