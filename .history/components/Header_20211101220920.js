import HeaderIcon from "./HeaderIcon";
import Link from "next/link";
import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'
import { useAuth } from '../auth'
import Image from 'next/image'
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
	const router = useRouter()
	const { user } = useAuth()
	const [open, setOpen] = useRecoilState(modalState);
	return (
		<div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
			{/* left */}
			
			<div className="flex items-center">
				<p className="text-green-900 text-5xl justify-start">C</p>

			<div className="flex ml-2 items-center rounded-full bg-green-100 p-2">
				<SearchIcon 
					className="h-6 text-green-700" 
					height={25} 
					width={25}/>
				<input 
				className="flex ml-2 items-center rounded-full bg-green-100 p-2 outline-none flex-shrink"
				type= "text" 
				placeholder= "Search Critech" 
				size={50}
				/>
			</div>
			<div className="boyfpic">
				<Image src="/boyf.png" width={25} height={25}></Image>
			</div>


		<div className="flex-grow flex-wrap justify-center ">
			<div className="flex space-x-6">
				<button onClick={() => router.push('/profile')}>
				
				
				<HeaderIcon tab ={"Profile"}/>
        		

				</button>
				<button onClick={() => router.push('/cridgets')}>
				<HeaderIcon tab ={"Cridgets"}/>
				</button>
				<button onClick={() => router.push('/home')}>
				<HeaderIcon tab ={"Feed"}/>
				</button>
				<button onClick= {() => setOpen(true)}>
				<HeaderIcon tab ={"Grades"}/>
				</button>
				<HeaderIcon tab ={"Settings"}/>	
				<h1 className="text-4xl justify-end">{`${user ? user.email : 'no user signed in'} `}</h1>
				
			</div>
		</div>
		</div>
	
			{/* right */}

		</div>
	
	
	);
}


export default Header;