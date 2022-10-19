import React from 'react';
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from './Footer';
import image from '../public/meta.png'
import { useRouter } from "next/router";


export default function ContainerBlock({ children, ...customMeta }) {

  const router = useRouter();
  const meta = {
    title: "Moez Hamza - Developer, Architect,Pianist and Music Producer",
    description: `welcome to my official website `,
    image: image,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
       <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        </Head>
        <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}