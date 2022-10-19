import React from "react";
import Image from "next/image";

import mongodb from '../public/mongo.png';
import postgresql from '../public/postgresSql.png';
import flutter from '../public/flutter.png';
import reactImage from '../public/React.png';
import nextjs from '../public/nextjs.png';
import tailwind from '../public/tailwind.png';
import mysql from '../public/mysql.png';
import github from '../public/github.png';
import nodejs from '../public/nodejs.png';


export default function Experience() {
    const techs = [
        {
            id: 1,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-800",
        },
        {
            id: 2,
            src: postgresql,
            title: "PostgreSQL",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: flutter,
            title: "Flutter - FireBase",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-black dark:shadow-white",
        },
        {
            id: 7,
            src: mysql,
            title: "mySql",
            style: "shadow-orange-400",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 9,
            src: nodejs,
            title: "Node.js",
            style: "shadow-green-400",
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Experience 
                </h1>
                
                
            </div>
            
            <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                
                <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20"></div>
            </div>
            {/* Grid starts here */}
            <div >
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-10">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <Image src={src} alt="" className="mx-auto" width='200px' height="200px" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section >

    )


}