import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import image from "/src/image";

export default function Header() {
  const handleDarkMode = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const [isOpen, setIsOpen] = useState(false);
  const toogleNavbar = () => {
    setIsOpen(!isOpen);
    // Toggle scroll pada html
    if (!isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.position = "fixed";
      document.documentElement.style.width = "100%";
      document.documentElement.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.documentElement.style.top;
      document.documentElement.style.overflow = "";
      document.documentElement.style.position = "";
      document.documentElement.style.width = "";
      document.documentElement.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // Mengembalikan scroll browser ke normal
    const scrollY = document.documentElement.style.top;
    document.documentElement.style.overflow = "";
    document.documentElement.style.position = "";
    document.documentElement.style.width = "";
    document.documentElement.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);

    // Smooth scroll ke section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed transition-all duration-500 ease-in-out 
            py-3 lg:py-4 px-4 md:px-10 lg:px-24 w-full h-max z-50
            ${
              showNavbar
                ? "transform translate-y-0"
                : "transform -translate-y-full"
            }`}
    >
      <div className="container mx-auto flex justify-between items-center gap-3 h-max">
        <div className="flex items-center gap-4">
          <button
            onClick={toogleNavbar}
            className="md:hidden transition-all duration-300 
                            bg-white/70 dark:bg-slate-800/70 backdrop-blur-md
                            hover:bg-gray-100 dark:hover:bg-slate-700 
                            p-2.5 rounded-full shadow-lg
                            hover:scale-110 active:scale-95
                            relative z-50"
          >
            <Menu
              size={24}
              className="text-gray-700 dark:text-gray-200
                                transition-transform duration-300 hover:scale-110"
            />
          </button>
          <a href="#" className="transition-transform hover:scale-105">
            <img className="w-24 md:w-28 lg:w-32" src={image.logo} alt="logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
            <ul className="flex items-center gap-6 lg:gap-8">
              {["Home", "About Me", "Projects", "Journey", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      onClick={(e) =>
                        handleNavClick(e, item.toLowerCase().replace(" ", ""))
                      }
                      className="relative text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 
                                            text-sm lg:text-base font-medium transition-colors duration-300 py-2
                                            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                                            after:bg-sky-500 dark:after:bg-sky-400 after:transition-all after:duration-300
                                            hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`
                    fixed md:hidden top-0 left-0 h-screen w-3/4 max-w-sm
                    bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    pt-24 px-6 z-50
                `}
        >
          {/* Tombol Close */}
          <button
            onClick={toogleNavbar}
            className="absolute top-6 right-6 
                            transition-all duration-300
                            bg-white/70 dark:bg-slate-800/70 backdrop-blur-md
                            hover:bg-gray-100 dark:hover:bg-slate-700 
                            p-2.5 rounded-full shadow-lg
                            hover:scale-110 active:scale-95"
          >
            <X
              size={24}
              className="text-gray-700 dark:text-gray-200
                                transition-transform duration-300 rotate-90 hover:rotate-180"
            />
          </button>

          <ul className="flex flex-col gap-6">
            {["Home", "About Me", "Projects", "Journey", "Contact"].map(
              (item, index) => (
                <li
                  key={item}
                  className={`transform transition-all duration-300 delay-[${
                    index * 100
                  }ms]
                                    ${
                                      isOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-8 opacity-0"
                                    }`}
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    onClick={(e) =>
                      handleNavClick(e, item.toLowerCase().replace(" ", ""))
                    }
                    className="relative text-gray-700 dark:text-gray-200 
                                        hover:text-sky-500 dark:hover:text-sky-400
                                        text-lg font-medium transition-colors duration-300
                                        flex items-center gap-2 py-2"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="relative z-50">
          <input
            id="switch"
            className="sr-only"
            type="checkbox"
            onChange={handleDarkMode}
          />
          <label
            className="toggle relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md w-12 h-12 rounded-full 
                            grid place-items-center cursor-pointer shadow-lg hover:shadow-xl 
                            transition-all duration-300 hover:scale-105"
            htmlFor="switch"
          >
            <div className="icon icon--moon absolute transition-transform duration-500 delay-200 scale-0">
              <svg
                height="32"
                width="32"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="icon icon--sun absolute transition-transform duration-500 transform">
              <svg
                height="32"
                width="32"
                fill="#fcf003"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
