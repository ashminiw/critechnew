import React, { useState } from 'react'
import "tailwindcss/tailwind.css"
import { CameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import { useAuth } from '../auth';


function InputBox() {
	const { user } = useAuth();
	const [title, setTitle] = useState('');

	const handleOnChange = (e) => {
	  setTitle(e.target.value);
	};
	const createPost = () => {
	  const postRef = firebase.database().ref('Post');
	  const post = {
	    title,
	    complete: false,
	//     user: {user}
	  };
      
	  postRef.push(post)
};

	return (
		<div className="mx-5 bg-green-400 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
		<div className="flex space-x-4 p-20 items-center">
			<form className="flex flex-1">
				<input
				className="rounded-full h-12 bg-gray-100 flex-grow px-2 focus:outline-none"
				type = "text"
				placeholder={`What's on your mind?`}
				onChange={handleOnChange}
				value={title}
				/>
				<button className="w-1/8 bg-purple-500 hover:bg-green-900 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-green-800 rounded" 
				type='submit'
				onClick={createPost}>
					Submit
				</button>
			</form>
	

			
			
		</div>
		<div className="flex justify-evenly p-3 border-t">
			<div className="flex items-center space-x-1 cursor-pointer justify-center">
				<EmojiHappyIcon className="h-7 text-yellow-300"/>
				<p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>

			</div>
			<div className="flex items-center space-x-1 cursor-pointer justify-center">
				<CameraIcon className="h-7 text-green-900"/>
				<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
			</div>
		</div>
		</div>
	)
}

export default InputBox

