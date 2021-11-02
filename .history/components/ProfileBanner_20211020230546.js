import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"
import { CameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import "firebase/firestore"
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { useAuth } from '../auth'
import { ref, getDownloadURL, uploadString } from "@firebase/storage"
import firebase from "firebase/app";
import { firebaseClient } from "../firebaseClient"
import ProfilePic from "./ProfilePic"

function ProfileBanner() {
	// const sendPost = {e} => {
	// 	e.preventDefault();
	// };
	const [posts, setPosts] = useState([])
	const db = firebaseClient.firestore();
	
	useEffect(
		() =>
	db.collection("posts").doc("hi").onSnapshot((snapshot) => {
		    setPosts(snapshot.docs);
	    }
    ),
    [db]
	);
	console.log(posts);
   

	return (
		
		<div className="bg-purple-300 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			
				<ProfilePic 
		
				img={post.data().img}
				caption={post.data().caption}
				/>
			
		
		</div>
	)
}

export default ProfileBanner