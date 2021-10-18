import React, { useState, useEffect } from 'react';
import { firebaseClient } from '../firebaseClient';
import 'firebase/database'
import Bio from './Bio';
import { useAuth } from '../auth'

export default function BioList() {
  const [userinfoList, setUserInfoList] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const userinfoRef = firebase.database().ref('User');
    userinfoRef.on('value', (snapshot) => {
      const users = snapshot.val();
      const userinfoList = [];
      for (let id in users) {
        userinfoList.push({ id, ...users[id] });
      }
      setUserInfoList(userinfoList);
    });
  }, []);

  return (
    <div>
      {userinfoList
        ? userinfoList.map((userinfo, index) => <Bio userinfo={userinfo} key={index} />)
        : ''}
    </div>
  );
}