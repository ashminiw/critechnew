import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../firebaseClient';
import "tailwindcss/tailwind.css";
import SignUpHeader from '../components/SignUpHeader';
import Footer from '../components/Footer';
import Head from 'next/head';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div className="flex flex-col min-h-screen bg-green-500">
      <Head><title> Critech|Login </title></Head>
      <SignUpHeader/>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <div className="flex flex-col justify-center place-self-center bg-gray-300 border border-white w-9/16 py-8 flex items-center mb-3">
      <text className="text-2xl text-purple-700"> Username/Email </text>
      <input className="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <br />
      <text className="text-2xl text-purple-700"> Password </text>
      <input className ="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <div className="space-x-7">
      <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass);
          window.location.href = '/';
        }}
      >
        Create account
      </button>
      <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
          window.location.href = '/home';
        }}
      >
        Log in
      </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
