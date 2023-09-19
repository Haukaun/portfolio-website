import React from 'react'
import useDarkMode from '../../hooks/useDarkMode'


function DarkModeSwitch() {

    const [theme, setTheme]: [string, React.Dispatch<React.SetStateAction<string>>] = useDarkMode();


    function setMode(mode: string) {
        window.location.reload()
        setTheme(mode)
    }

    return (
        <div>
            {theme === "light" ? (
                <svg
                    onClick={() => setMode("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ) : (
                <svg
                    onClick={() => setMode("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="#ADD8E6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            )}
        </div>

    )
}

export default DarkModeSwitch
