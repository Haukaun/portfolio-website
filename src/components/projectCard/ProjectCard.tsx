import { title } from 'process'
import React from 'react'


function ProjectCard(props: { title: string, description: string, image: string, secondImage?: string }) {
    return (
        <div className='mb-10'>
            <div className="bg-white border rounded-xl shadow-lg sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] p-5 hover:scale-110 duration-300 hover:cursor-pointer">
                <div className="flex items-center relative justify-center order-2 w-full rounded-t-xl overflow-hidden sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                    <img className="w-full h-full p-5" src={props.image} alt="Project" />
                    <div className='absolute w-[218px]'>
                        <img src={props.secondImage} alt="" className='h-[140px]' />
                    </div>
                </div>
                <div className="flex flex-wrap grow">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {props.title}
                        </h3>
                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                            {props.description}
                        </p>
                        <div className="mt-5 sm:mt-auto">
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                Please press card to get more information
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard