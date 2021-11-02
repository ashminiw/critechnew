//header
//profile banner
//right side bar --> my cridgets/classes
//left bar --> my posts


import Header from '../../components/Header';
import Footer from '../../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../../auth'
import Image from 'next/image'
import { firebaseClient } from '../../firebaseClient';
import 'firebase/database'
import Head from 'next/head';
import { writeQuiz } from './start'

function pgone({ userinfo }) {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Critech|Profile</title></Head>
			<button onClick={writeQuiz}> Start Quick</button>
			<div className="className='absolute inset-x-0 sticky-bottom-0"><Footer/></div>

		</div>

			
		
	)
}

export default pgone