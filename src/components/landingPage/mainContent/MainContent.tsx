import React from 'react'

function MainContent() {


    console.log(localStorage.getItem("theme"))

    return (
        <div>
            <div className="flex items-center flex-wrap justify-between w-full h-screen pb-20" >
                <div className="flex flex-col text-center md:text-left max-w-lg items-center md:items-start gap-5">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hi, I am <span className="text-blue-500 dark:text-red-500">Håkon</span></h1>
                    <h2 className="text-2xl italic font-bold text-gray-600 dark:text-gray-400">Fullstack developer</h2>
                    <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                        Currently working for Experis as a fullstack consultant and graduated from NTNU where i took my bachelor in computer science.
                    </h3>
                </div>
                <div className='relative'>
                    {
                        localStorage.getItem("theme") === "light" ?

                            <img src="./images/splashblue.png" alt="Blue splash" />

                            :
                            <img src="./images/splashred.png" alt="Red splash" />
                    }
                    <img src="./images/personalnormal.png" alt="" className='absolute top-0 left-0 w-36 h-auto' />
                </div>

            </div>
        </div>
    )
}

export default MainContent