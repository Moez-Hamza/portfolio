import React from "react";

export default function Aboutme() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    About me
                </h1>
            </div>
            <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold"
                        style={{ lineHeight: "3rem" }}
                    >
                        I am a freshly graduated full stack JavaScript developer.
                        Passionate about IT, i learned to code using JavaScript frameworks and took the opportunity to create personal and team projects . I master the different technical stages of creating a website or applications from understanding the user needs, to frontend and backend development and maintenance.
                        Currently i seek to apply what i learned in a good position and within a good company .
                    </p>
                </div>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-20 grid grid-rows-1 md:grid-rows-2 max-w-6xl mx-auto gap-x-20">
                    <div className="flex-basis: 1rem flex-row">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Contact
                            </h1>
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                                For any sort help / enquiry, shoot an{" "}
                                <a
                                    href={`mailto:hamza.moez@gmail.com`}
                                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                                >
                                    email
                                </a>{" "}
                                and I will get back to you.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Job Opportunities
                            </h1>
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                                Currently I am looking for new opportunities, If you see me as a good fit,
                                check my{" "}
                                <a
                                    href='https://drive.google.com/file/d/1NSvXez4oKCKXbGe57t7-1U7USXvMIuQ-/view?usp=sharing'
                                    target="__blank"
                                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                                >
                                    resume.
                                </a>{" "}

                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}