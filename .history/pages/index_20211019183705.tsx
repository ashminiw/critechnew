import React from 'react';
import Link from 'next/link';
import { useAuth } from '../auth';
import SignUpHeader from '../components/SignUpHeader';
import Footer from '../components/Footer';
// import Layout from '../components/Layout';
import "tailwindcss/tailwind.css";
import Head from 'next/head';

export default () => {
  const { user } = useAuth();

  return(
  

    <div className="flex flex-col min-h-screen bg-green-500">
    <Head><title> Critech </title></Head>
      <SignUpHeader/>
      
      <div className="text-xl text-white">
      
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          <a>Go to authenticated route</a>
        </Link>
      </p>
      </div>
      <div className="flex flex-col justify-center place-self-center bg-gray-300 border border-green-800 w-96 py-8 flex items-center mb-3">
      <text className="text-5xl text-purple-700 text-center"> Welcome to Critech! </text>
      <text className="text-2xl text-purple-700 text-center">Changing the world</text>
      <text className="text-2xl text-purple-700 text-center" >One student at a time</text>
      <br></br>
      <p>
        <Link href="/login">
          <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">Login</button>
        </Link>
      </p>
      </div>
      <Footer/>
    </div>
  );
};
