import React, { useState, useEffect } from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import Post from './Post';
import { useAuth } from '../auth'

export default function PostList() {
  const [postList, setPostList] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const postRef = firebase.database().ref('Post');
    postRef.on('value', (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      setPostList(postList);
    });
  }, []);

  return (
    <div>
      {postList
        ? postList.map((post, index) => <Post post={post} key={index} />)
        : ''}
    </div>
  );
}