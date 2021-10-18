import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';  
import InputBox from '../components/InputBox'; 
// import ProfileBanner from '../components/ProfileBanner'; 
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import Head from 'next/head';
// import profilePic from '../logos/profilepic1.png'

function about() {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Header/>
			<Head><title> Critech|Edit Profile </title></Head>
			<div className="bg-purple-300 p-2 sticky-top-0 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<text className="text-7xl text-green-800 p-4 mx-20">{`${user ? user.email : 'no user signed in'}'s Profile`}</text>	
			{/* <Image src={profilePic} alt="Picture of the author" /> */}
			{/* <image src={profilePic} alt="author"/> */}
			<UserInfo/>
			<text className="flex-items-center" onClick={() => router.push('/profile')}> Save and Return </text>
			</div>
			<div><Footer/></div>

			
		</div>
	)
}

export default about