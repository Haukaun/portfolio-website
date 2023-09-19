import React from 'react'
import Header from '../components/header/Header';
import MainContent from '../components/landingPage/mainContent/MainContent';



function LandingPage() {
    return (
        <main className='flex justify-center bg-white dark:bg-gray-800'>
            <div className='w-full min-h-screen max-w-[70%]'>
                <Header />
                <MainContent />
            </div>
        </main>
    )
}


export default LandingPage;