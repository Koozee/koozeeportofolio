import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react";
import image from "/src/image";

export default function Header() {
    const handleDarkMode = (e) => {
        if (e.target.checked) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    const [isOpen, setIsOpen] = useState(false);
    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={`fixed transition-all duration-300 ease-in-out bg-transparent py-5 px-3 md:px-10 lg:px-24 flex justify-center items-center w-full h-max z-50 ${showNavbar ? `transform translate-y-0` : 'transform -translate-y-full'}`}>
            <div className="container flex justify-between items-center gap-3 h-max max-w-full">
                <div className="flex items-center">
                    <button onClick={toogleNavbar} className="md:hidden transition-all duration-500 ease-in">
                        {isOpen ? <X size={36} /> : <Menu size={36} />}
                    </button>
                    <a href="#">
                        <img className="hidden md:block w-full" src={image.logo} alt="logo" />
                    </a>
                </div>
                <nav className="z-50 hidden md:block top-[9%] w-screen md:relative md:top-0 md:w-max dark:bg-slate-800 bg-slate-100 md:bg-sky-300 px-5 md:rounded-full drop-shadow-xl md:shadow-sky-400/30">
                    <ul className="text-center dark:text-white flex flex-col md:items-center md:flex-row mx-auto p-4 gap-[4vw]">
                        <li className="text-sm md:text-lg dark:hover:text-slate-300 hover:text-slate-50 hover:underline hover:underline-offset-8"><a
                            href="#home">Home</a>
                        </li>
                        <li className="text-sm md:text-lg dark:hover:text-slate-300 hover:text-slate-50 hover:underline hover:underline-offset-8"><a
                            href="#about">About Me</a></li>
                        <li className="text-sm md:text-lg dark:hover:text-slate-300 hover:text-slate-50 hover:underline hover:underline-offset-8"><a
                            href="#project">Projects</a></li>
                        <li className="text-sm md:text-lg dark:hover:text-slate-300 hover:text-slate-50 hover:underline hover:underline-offset-8"><a
                            href="#journey">Journey</a></li>
                        <li className="text-sm md:text-lg dark:hover:text-slate-300 hover:text-slate-50 hover:underline hover:underline-offset-8"><a
                            href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {isOpen && (
                    <nav className="no-doc-scroll z-50 absolute p-5 w-screen h-screen right-0 top-0 bg-sky-200 dark:bg-slate-800 md:hidden">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button onClick={toogleNavbar}>
                                    <X size={30} />
                                </button>
                                <a href="#">
                                    <img className="w-[80%]" src={image.logo} alt="logo" />
                                </a>
                            </div>
                        </div>

                        <ul className="text-gray-950 dark:text-slate-50 w-full h-full text-center flex flex-col justify-center items-center gap-10">
                            <li onClick={toogleNavbar} className="text-2xl hover:text-slate-50 dark:hover:text-slate-300 hover:underline hover:underline-offset-8"><a
                                href="#home">Home</a>
                            </li>
                            <li onClick={toogleNavbar} className="text-2xl hover:text-slate-50 dark:hover:text-slate-300 hover:underline hover:underline-offset-8"><a
                                href="#about">About Me</a></li>
                            <li onClick={toogleNavbar} className="text-2xl hover:text-slate-50 dark:hover:text-slate-300 hover:underline hover:underline-offset-8"><a
                                href="#project">Projects</a></li>
                            <li onClick={toogleNavbar} className="text-2xl hover:text-slate-50 dark:hover:text-slate-300 hover:underline hover:underline-offset-8"><a
                                href="#journey">Journey</a></li>
                            <li onClick={toogleNavbar} className="text-2xl hover:text-slate-50 dark:hover:text-slate-300 hover:underline hover:underline-offset-8"><a
                                href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                )}


                <div className="fixed right-3 md:relative md:right-0 flex justify-center items-center z-50">
                    <input id="switch" className="sr-only input" type="checkbox" onChange={handleDarkMode} />
                    <label className="toggle relative bg-white w-14 h-14 rounded-full grid place-items-center cursor-pointer shadow-[0_0_50px_20px_rgba(0,0,0,0.1)]" htmlFor="switch">
                        <div className="icon icon--moon absolute transition-transform duration-500 delay-200 scale-0">
                            <svg height="32" width="32" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd"></path>
                            </svg>
                        </div>

                        <div className="icon icon--sun absolute transition-transform duration-500 transform">
                            <svg height="32" width="32" fill="#fcf003" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                            </svg>
                        </div>
                    </label>
                </div>
            </div>
        </header>
    )
}