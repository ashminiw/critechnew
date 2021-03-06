
import Header from '../components/Header';
import Modal from '../components/Modal';
import Footer from '../components/Footer';  
import InputBox from '../components/InputBox';
import Form from '../components/Form';  
import PostList from '../components/PostList'; 
import ReadDataFromCloudFirestore from '../components/Read';  
import WriteToCloudFirestore from '../components/Write';   
import "tailwindcss/tailwind.css"
import { useRouter } from 'next/router'
import { useAuth } from '../auth'
import Head from 'next/head';

function home() {
	const { user } = useAuth();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Critech|Feed </title></Head>
			<Modal/>
			<Header/>
			
			<text className="text-7xl text-green-200 p-4 mx-20">{`Welcome ${user ? user.email : 'no user signed in'}`}</text>
			{/* header
			trending cridget cards
			input box
			
			footer */}
			<div className="grid grid-cols-1 xl:grid-cols-2">
			<InputBox />
			<WriteToCloudFirestore/>
			<ReadDataFromCloudFirestore/>
			</div>
			{/* <Form/> */}
			<br></br>
			<PostList/>
		
			<div><Footer/></div>

			
		</div>
	)
}

export default home

