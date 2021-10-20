//header
//profile banner
//right side bar --> my cridgets/classes
//left bar --> my posts

import BioList from '../components/BioList';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';  
import InputBox from '../components/InputBox'; 
// import ProfileBanner from '../components/ProfileBanner'; 
// import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import Bio from '../components/Bio';
import Head from 'next/head';
// import profilePic from '../logos/profilepic1.png'

function profile({ userinfo }) {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Critech|Profile</title></Head>
			<Header/>
			<div>
			<div className="bg-purple-300 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 grid grid-col-1">
			<text className="text-7xl text-green-800 p-4 mx-20">{`${user ? user.email : 'no user signed in'}'s Profile`}</text>
			<text className="items-ends" onClick={() => router.push('/about')}> Edit Profile </text>
			{/* <Image src={profilePic} alt="Picture of the author" /> */}
			{/* <image src={profilePic} alt="author"/> */}
			<BioList/>
			</div>
			<div className="bg-purple-400 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
				<h1>Cridget Progress</h1>
			</div>
			</div>
	
			<br></br>
			<div className="className='absolute inset-x-0 sticky-bottom-0"><Footer/></div>

		</div>

			
		
	)
}

export default profile
