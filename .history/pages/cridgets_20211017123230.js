import Header from '../components/Header';
import Footer from '../components/Footer';  
import InputBox from '../components/InputBox'; 
// import ProfileBanner from '../components/ProfileBanner'; 
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
// import profilePic from '../logos/profilepic1.png'

function cridgets() {
	const { user } = useAuth();
	
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Header/>
			{/* <div className="bg-purple-300 p-2 sticky-top-0 rounded-2xl shadow-md text-gray-500 font-medium mt-6"> */}
			{/* <text className="text-7xl text-green-800 p-4 mx-20">{`${user ? user.email : 'no user signed in'}'s Profile`}</text>
			<text> About me </text> */}
			<div className="flex flex-col justify-evenly space-y-6"> 
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center">Cridget 1 <Image src="/chris.png" /> </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center">Cridget 2  </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center">Cridget 3  </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center">Cridget 4  </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center">Cridget 5 </div>

			</div>
			<div><Footer/></div>

			
		</div>
	)
}

export default cridgets