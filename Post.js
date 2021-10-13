import React from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import { useAuth } from '../auth'
import { ArchiveIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import { ChatIcon } from '@heroicons/react/solid'

export default function Post({ post }) {
  const { user } = useAuth();
  const deletePost = () => {
    const postRef = firebase.database().ref('Post').child(post.id);
    postRef.remove();
  };
  const completePost = () => {
    const postRef = firebase.database().ref('Post').child(post.id);
    postRef.update({
      complete: !post.complete,
    });
  };
  return (

    <div className="w-1/4 items-center place-self-center bg-green-200">
      <h1>{`${user ? user.email : 'no user signed in'}'s Post`}</h1>
      <h1 className={post.complete ? 'complete' : ''}>{post.title}</h1>
      <div className=" flex justify-evenly space-x-6 ">
      {/* <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" onClick={deletePost}>Delete</button> */}
      
      <ArchiveIcon className="h-7 text-blue-800" onClick={deletePost} />
      <HeartIcon className="h-7 text-red-800" onClick={completePost} />
      <ChatIcon className="h-7 text-green-800" />  
      {/* <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" onClick={completePost}>Complete</button> */}
      </div>
    </div>
  );
}

{/* <div className="flex justify-evenly p-3 border-t">
			<div className="flex items-center space-x-1 cursor-pointer justify-center">
				<EmojiHappyIcon className="h-7 text-yellow-300"/>
				<p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>

			</div>
			<div className="flex items-center space-x-1 cursor-pointer justify-center">
				<CameraIcon className="h-7 text-green-900"/>
				<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
			</div>
		</div> */}