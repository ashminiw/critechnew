import Header from '../components/Header';
import Footer from '../components/Footer';  
import InputBox from '../components/InputBox'; 
// import ProfileBanner from '../components/ProfileBanner'; 
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Image from 'next/image'
import Head from 'next/head'
// import profilePic from '../logos/profilepic1.png'

function cridgets() {
	const { user } = useAuth();
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Critech|Cridgets </title></Head>
			<Header/>
			{/* <div className="bg-purple-300 p-2 sticky-top-0 rounded-2xl shadow-md text-gray-500 font-medium mt-6"> */}
			{/* <text className="text-7xl text-green-800 p-4 mx-20">{`${user ? user.email : 'no user signed in'}'s Profile`}</text>
			<text> About me </text> */}
			{/* <div className="flex flex-col justify-evenly space-y-6"> 
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/fakenews')}> Fake News </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/datapriv')}> Data Privacy </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/sma')} > Social Media Addiction </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/phishing')}> Phishing </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/quiz1/cyberbullying/start')}> Cyberbullying </div>
			</div>
			{/* <div className="flex flex-col justify-evenly space-y-6 mx-24"> 	 */}
			{/* <div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/phishing')}> Fart </div>
			<div className="grid grid-cols-1">
			<div className="flex justify-evenly space-y-6"> 
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/fakenews')}> Fake News </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/datapriv')}> Data Privacy </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/sma')} > Social Media Addiction </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('/phishing')}> Phishing </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/quiz1/cyberbullying/start')}> Cyberbullying </div>
			</div> */}

			{/* </div> */}
			{/* </div> */}
			{/* <div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/fakenews')}> Fake News </div>
			<div className="bg-purple-50 w-32 h-32 p-4 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/fakenews')}> Fake News </div> */}
			<div className="grid grid-cols-0">
			<div className="bg-green-400 py-16 flex items-center justify-center space-x-8">
				<p>Cyberbullying</p>
				<div className="bg-red-300 w-24 h-24 rounded-full flex items-center justify-center text-center" onClick={() => router.push('./modules/quiz1/cyberbullying/start')}>Module1</div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-500 w-24 h-24 rounded-full"></div>
				<div className="bg-red-600 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24rounded-full"></div>
			</div>
			</div>
			<div className="grid grid-cols-1">
			<div className="bg-purple-400 py-16 flex items-center justify-center space-x-8">
				<p>Data Privacy</p>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
			</div>
			</div>
			<div className="grid grid-cols-1">
			<div className="bg-yellow-400 py-16 flex items-center justify-center space-x-8">
				<p>Fake News</p>
			<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-blue-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
				<div className="bg-red-400 w-24 h-24 rounded-full"></div>
			</div>
			</div>
			<div><Footer/></div>

			
		</div>
	)
}

export default cridgets