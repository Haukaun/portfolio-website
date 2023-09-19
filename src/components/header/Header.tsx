import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch"



function Header() {

    return (
        <header className="flex flex-wrap flex-col sm:justify-start sm:flex-nowrap z-50 w-full text-md py-4 bg-white dark:bg-gray-800">
            <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <a className="flex-none text-2xl font-semibold dark:text-white" href="/">Håkon</a>
                <div className="flex flex-row flex-wrap items-center gap-10 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
                    <a className="font-medium text-blue-500 dark:text-red-500" href="/" aria-current="page">Landing</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" aria-current="page" href="/about">About</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/">Skills</a>
                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/">Contact</a>
                    <DarkModeSwitch />
                </div>
            </nav>
        </header>
    )
}

export default Header
