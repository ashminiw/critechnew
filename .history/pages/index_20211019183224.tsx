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
      <div className="flex flex-col justify-center place-self-center bg-green-300 border border-green-800 w-96 py-8 flex items-center mb-3">
      <text className="text-5xl text-purple-700 text-center"> Welcome to Critech! </text>
      <p>
        <Link href="/login">
          <a className="text-lg text-center bg-purple-300 text-white py-1 rounded font-medium">Login</a>
        </Link>
      </p>
      </div>
      <Footer/>
    </div>
  );
};
