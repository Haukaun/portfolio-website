import React from 'react';

export function ContactSection() {
    return (
        <div id='contact' className='h-auto py-20 bg-blue-500 dark:bg-red-500  mt-20 text-white '>
            <div className='max-w-[70%] 2xl:max-w-[85rem] mx-auto w-full flex flex-col justify-center items-center gap-16'>
                <h1 className='text-4xl font-bold'>CONTACT</h1>
                <div className='flex items-center w-full'>
                    <div className='flex flex-col items-center gap-1 w-full'>
                        <div className='w-20 h-20 bg-blue-400 dark:bg-red-400 rounded-full shadow-lg flex justify-center items-center'>
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={40} viewBox="0 0 128 128"><path d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z" /></svg>
                        </div>
                        <h1 className='text-2xl font-semibold pb-3'>Email</h1>
                        <h2 className='text-md font-semibold'>Private mail</h2>
                        <p>haakonfs@hotmail.com</p>
                        <h2 className='text-md font-semibold'>Work mail</h2>
                        <p>hakon.satre@no.experis.com</p>
                    </div>
                    <div className='flex flex-col items-center gap-1 w-full'>
                        <div className='grow w-10 h-10'></div>
                        <div className='w-20 h-20 bg-blue-400 dark:bg-red-400 rounded-full shadow-lg flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                        <h1 className='text-2xl font-semibold pb-3'>Github/Gitlab</h1>
                        <h2 className='text-md font-semibold'>Github/Gitlab</h2>
                        <p>Haukaun</p>

                    </div>
                    <div className='flex flex-col items-center gap-1 w-full'>
                        <div className='w-20 h-20 bg-blue-400 dark:bg-red-400 rounded-full shadow-lg flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="40" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </div>
                        <h1 className='text-2xl font-semibold pb-3'>Others</h1>
                        <h2 className='text-md font-semibold'>LinkedIn</h2>
                        <p>Håkon Sætre</p>
                        <h2 className='text-md font-semibold'>Instagram</h2>
                        <p>hakonz3</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
