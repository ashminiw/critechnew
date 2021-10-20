import React from 'react'
import FooterIcons from './FooterIcons'
import { useRouter } from 'next/router'

function Footer() {
	const router = useRouter()
	return (
		<div>
			<div className='absolute inset-x-0 bottom-0 h-14 bg-green-200 flex items-center md:px-5 lg:px-5'>
				<div className="flex space-x-16" >
				<FooterIcons onClick={() => router.push('/about')} foot={"About"} />
				<FooterIcons foot={"Blog"}/>
				<FooterIcons className='flex items-center' foot={"Terms of Service"}/>
				<FooterIcons foot={"Privacy Policy"}/>
				<FooterIcons foot={"Advertising"}/>
				<FooterIcons foot={"Cookie Policy"}/>
				<FooterIcons foot={"Cridget Creators"}/>
				<FooterIcons foot={"@2021 Critec, Inc"}/>
				
				</div>
				 
			</div>
		</div>
	)
}

export default Footer