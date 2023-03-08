import React from "react";

export default function Footer() {
    let date = new Date()
    return (
        <footer className="footer footer-center bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
                <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8"></div>
                <center><p>Copyright © {date.getFullYear()} - Moez Hamza</p></center>
            </div>
        </footer>

    )

}