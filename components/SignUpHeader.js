import React from 'react'
import "tailwindcss/tailwind.css";
function SignUpHeader() {
	return (
		<div>
			<div className='sticky top-0 absolute inset-x-0 top-0 h-40 bg-green-500 mb-40 lg:px-5 h-0 flex items-center flex-wrap justify-between'>
				<p className="text-green-100 text-9xl flex justify-start"> Critech </p>
				<p className=" text-purple-500 text-4xl flex justify-center"> Learning for the Future </p>
	
			</div>
			{/* <div className='h-24 pb-40 w-2/5 bg-center space-y-28 justify-between bg-center bg-green-700 flex'>
				

			</div> */}
		</div>
	)
}

export default SignUpHeader