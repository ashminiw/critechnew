import Header from '../components/Header';
import Footer from '../components/Footer';  
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'

function Addiction() {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Cridgets|Addiction </title></Head>
			<Header/>
			<div><Footer/></div>

			
		</div>
	)
}

export default Addiction