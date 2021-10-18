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
      
      <div className="flex flex-col items-center text-xl text-white">
      
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          <a>Go to authenticated route</a>
        </Link>
      </p>
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
