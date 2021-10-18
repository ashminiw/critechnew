import Header from '../components/Header';
import Footer from '../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'

function FakeNews() {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Cridgets|Fake News </title></Head>
			<Header/>
			
			<div><Footer/></div>
		</div>
	)
	
}

export default FakeNews
//steps
//hook intro
//purpose goals outline
//preliminary quiz
//content
//heres the kicker --> videos!
//post quiz