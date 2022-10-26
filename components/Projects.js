import React from "react";




export default function Projects() {
    const myProjects =[
        {
         id:1,
         title:'Piano Symphony',
         description:'A website that regroups piano sheets and follows the progress of the user, you can login and sign in and also view profiles and see demos if you need help',
         link:'https://www.youtube.com/watch?v=cVNRnV1_-Ls' ,
         imgUrl: 'https://res.cloudinary.com/dafqx8f7o/image/upload/v1666173997/Screenshot_2022-10-19_at_10.57.32_ax6l8l.png',
         code:'https://github.com/Piano-Symphony/Symphony'
        },
        {
            id:2,
            title:'Better Body',
            description:'A website that helps people to start working out, the user can login and sign in and according to his objective he can find the program that fits him',
            link:'https://www.youtube.com/watch?v=SLcXRAdgGDA&t=6s&ab_channel=HaythemBensouissi',
            imgUrl:'https://res.cloudinary.com/dafqx8f7o/image/upload/v1666177660/BetterBody_wyg3yo.png',
            code:'https://github.com/RBK-hachers/Better-Body'
        },
        {   
            id:3,
            title:'Kampy',
            description:'Our thesis project a mobile app that connects all the campers, the user can login and sign in in order to find posts, events, shop, weather, chats and a map with the most popular camping locations in Tunisia',
            link:'https://www.youtube.com/watch?v=LpejaeS5xMo&ab_channel=myworld',
            imgUrl:'https://res.cloudinary.com/dafqx8f7o/image/upload/v1666178132/Kampy_ex3pts.png',
            code:'https://github.com/Always-number-one/Kampy'
        },
        {
            id:4,
            title:'Kampy Admin Dashboard',
            description:'The dashboard of the kampy app to see all the data and where the admin can ban and delete posts and see all the data of the mobile app',
            link:'https://www.youtube.com/watch?v=3o8gcmQpaGo&ab_channel=myworld',
            imgUrl:'https://res.cloudinary.com/dafqx8f7o/image/upload/v1666183019/Kampy_Admin_qglat7.png',
            code:'https://github.com/Always-number-one/Kampy-Admin'
        },



    ]

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Projects
                </h1>
            </div>
            {/* Grid starts here */}
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                   {myProjects.map(({title,description,link,imgUrl,code,id})=>
                    <ProjectCard key={id} title= {title} description={description} link={link} imgUrl={imgUrl} code={code} />
                   )}
                </div>
            </div>
        </section>

    )

}

const ProjectCard = ({ title, link, imgUrl, code,description }) => {
    return (
        <div className="w-full block shadow-2xl rounded-lg" >
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-110 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    {title}
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                </h1>
            <div className="flex items-center justify-center">
                <a href={code}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold" href={code}>Code</button>
                </a>
                <a href={link}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold" href={link}>Demo</button>
                </a>
            </div>
            <center><p className="">
                {description}
            </p></center>
            </div>
        </div>
    );
};