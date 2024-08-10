import TittleContent from "../Elements/TittleContent";
import image from "/src/image";
export default function Contact(props) {
    return (
        <section id="contact" className="2xl:px-72 xl:px-48 px-5">
            <TittleContent variant={"text-sky-600"} tittletext={"📲Contact Me"} />
            <div className="container lg:flex justify-between items-center">

                <div className="relative mb-5 mx-auto xl:mx-0 duration-300 hover:-rotate-0 -rotate-12 group border-sky-900 border-4 overflow-hidden rounded-2xl h-1/3 w-[70vw] md:w-1/2 lg:w-1/3 xl:w-[35%] bg-sky-800 p-5 flex flex-col items-start gap-4">
                    <div className="text-gray-50">
                        <span className="font-bold text-3xl">Niko Achmad</span>
                        <p className="font-bold text-3xl">Koozee</p>
                        <p className="text-base">Frontend Developer</p>
                    </div>
                    <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">Dowload CV
                        <svg className="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                            <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <img className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-0 h-48 z-10 -my-2" src={image.akudewecard} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h4 className="text-gray-950 text-center py-5 text-lg lg:text-2xl">Have a question or project you'd like to discuss? Send me a message and I'll get back to you soon!😁</h4>
                    <form className="relative flex flex-col gap-5" action="">
                        <input className="border-2 rounded-lg pl-3 py-2 w-full " type="text" name="guestname" id="" placeholder="Your Name" required />
                        <input className="border-2 rounded-lg pl-3 py-2 w-full " type="email" name="guestname" id="" placeholder="Your Email" required />
                        <input className="border-2 rounded-lg pl-3 py-2 w-full " type="text" name="guestname" id="" placeholder="Subjects" required />
                        <textarea className="border-2 rounded-lg pl-3 py-2 w-full" name="" id="" cols="30" placeholder="Your Messages" required></textarea>

                        <button className="group flex justify-center items-center gap-3 border-2 rounded-lg py-2 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 
              hover:bg-gradient-to-r hover:from-sky-400 hover:via-sky-500 hover:to-sky-400 transition-colors duration-300 ease-in-out">
                            <div className="text-slate-50 font-semibold text-lg">Send Message</div>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 relative group-hover:translate-x-3 transition-all duration-300 ease-in-out"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g clipPath="url(#clip0_58_2)">
                                    <path
                                        d="M1.76 21.0004L1.76054 21.379L2.10852 21.2298L23.0985 12.2298L23.6344 12L23.0985 11.7702L2.10852 2.77023L1.76054 2.62103L1.76 2.99964L1.75 9.99964L1.74969 10.2188L1.96696 10.2478L15.1084 12L1.96696 13.7522L1.74969 13.7812L1.75 14.0004L1.76 21.0004Z"
                                        fill="#F8F8F8"
                                        stroke="black"
                                        strokeWidth="0.5"
                                    />
                                </g>
                                <defs>
                                    <clippath id="clip0_58_2">
                                        <rect width={24} height={24} fill="white" />
                                    </clippath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}