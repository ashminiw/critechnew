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
      <div className="flex flex-col justify-center bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
      </div>
      <Footer/>
    </div>
  );
};
