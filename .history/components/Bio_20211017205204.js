import React from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import { useAuth } from '../auth'


export default function Bio({ userinfo }) {
  const { user } = useAuth();

  return (

    <div className="w-1/4 items-center place-self-center>
      <h1>{`${user ? user.email : 'no user signed in'}'s Bio`}</h1>
      <h1>{userinfo.firstName}</h1>
      <h1>{userinfo.lastName}</h1>
      <h1>{userinfo.year}</h1>
      <h1>{userinfo.about}</h1>
      <h1>{userinfo.mood}</h1>
    </div>
  );
  };