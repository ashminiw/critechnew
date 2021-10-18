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
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import Bio from '../components/Bio';
// import profilePic from '../logos/profilepic1.png'

function profile({ userinfo }) {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Header/>
			<div className="bg-purple-300 p-2 sticky-top-0 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<text className="text-7xl text-green-800 p-4 mx-20">{`${user ? user.email : 'no user signed in'}'s Profile`}</text>
			<text className="items-ends" onClick={() => router.push('/about')}> Edit Profile </text>
			{/* <Image src={profilePic} alt="Picture of the author" /> */}
			{/* <image src={profilePic} alt="author"/> */}
			<BioList/>
			</div>
	
			
			<div><Footer/></div>

			
		</div>
	)
}

export default profile
