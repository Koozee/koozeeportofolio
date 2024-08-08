import image from "./assets/img/image";
import Buttoncontact from "./components/Elements/Buttoncontact";
import TittleContent from "./components/Elements/TittleContent";

function App() {
  return (
    <>
      <main className="flex h-screen bg-gradient-to-tr from-white via-white to-sky-300 px-5">
        {/* nanti akan diisi form guest saat diawal pages */}
        <div className="container m-auto flex flex-col justify-center items-center w-max gap-y-5">
          <h1 className="text-4xl lg:text-5xl  text-purple-600 font-bold">Hello Guest,</h1>
          <h2 className="text-4xl lg:text-6xl text-purple-600 font-semibold">I am Niko Achmad</h2>
          <div className="flex gap-x-5 xl:gap-x-6 justify-center">
            <div className="relative w-[40%] lg:w-full">
              <h3 className="z-50 absolute text-4xl lg:text-6xl font-bold text-blue-600">Frontend</h3>
              <div className="z-0 text-transparent top-0 w-full h-[110%] transform -translate-x-2 translate-y-2 -rotate-6 rounded-lg bg-gradient-to-r from-[#5fbdff]/50 to-[#e5f4ff]/50">--------------------------------------</div>
            </div>
            <h3 className="text-4xl lg:text-6xl  font-bold text-blue-500">Developer</h3>
          </div>
          <p className="font-medium text-slate-600 text-2xl lg:text-3xl text-center lg:w-[60%] mt-5">Information engineering student from Malang who has an interest in web development</p>
          <div className="mt-10 grid grid-cols-3 gap-8 lg:gap-16">
            <Buttoncontact linkgoto={"mailto:nicoachmad15@gmail.com"} logo={image.logogmail} />
            <Buttoncontact linkgoto={"https://github.com/Koozee"} logo={image.logogithub} />
            <Buttoncontact linkgoto={"https://www.linkedin.com/in/niko-achmad-705233115/"} logo={image.logolinkin} />
          </div>
        </div>
      </main>

      <article className="2xl:px-72 xl:px-48 px-5">
        <TittleContent variant={"text-sky-600"} tittletext={"😎About Me"} />
        <div className="container flex flex-col-reverse xl:flex-row justify-between gap-3">
          <div className="xl:w-2/3 xl:pr-20 text-justify">
            <p className="text-gray-950 font-light text-xl xl:text-3xl">Hi, I'm Niko Achmad, a front end developer from Malang. I am a Bachelor of Informatics Engineering student from Universitas PGRI Kanjuruhan Malang. I am very interested in the world of programming, especially in web development, my favorite programming language is javascript because it is easy to learn, modern, and has a large community. I am not only a coder but also creative, problem solving and can adapt to new things.</p>
            <p className="text-gray-950 font-light text-xl xl:text-3xl py-5">With a strong background in web fundamentals I enjoy creating engaging and functional digital experiences. Besides coding, I enjoy exploring technology, playing games, and exploring nature.</p>
            
          </div>
          <img className="xl:w-1/3" src={image.akudewe} alt="" />
        </div>
      </article>

      <section className="2xl:px-72 xl:px-48 px-5">
        <TittleContent variant={"text-sky-600"} tittletext={"🚀Amazing Project"} />
        <h3 className="text-gray-950 text-xl xl:text-2xl text-justify xl:text-center">As a frontend web developer, I have worked on various projects that showcase my skills and creativity. Explore my work and see how I turn ideas into amazing web experiences.</h3>
        <div className="container mt-16">
          <div className="xl:grid grid-cols-2 gap-10">
            <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
              <img className="rounded-md " src={image.project1} alt="" />
              <div className="flex justify-end gap-3 p-3">
                <img className="w-9 h-9" src={image.htmllogo} alt="" />
                <img className="w-9 h-9" src={image.tailwindlogo} alt="" />
                <img className="w-9 h-9" src={image.jslogo} alt="" />
              </div>
              <p className="text-center font-bold text-2xl">Health Tech</p>
              <p className="text-center px-5 pt-3 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas eligendi quas adipisci odit nihil aliquam enim magnam laborum nam!</p>
            </div>
            <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:translate-x-5">
              <img className="rounded-md " src={image.project1} alt="" />
              <div className="flex justify-end gap-3 p-3">
                <img className="w-9 h-9" src={image.htmllogo} alt="" />
                <img className="w-9 h-9" src={image.tailwindlogo} alt="" />
                <img className="w-9 h-9" src={image.jslogo} alt="" />
              </div>
              <p className="text-center font-bold text-2xl">Health Tech</p>
              <p className="text-center px-5 pt-3 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas eligendi quas adipisci odit nihil aliquam enim magnam laborum nam!</p>
            </div>
            <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
              <img className="rounded-md " src={image.project1} alt="" />
              <div className="flex justify-end gap-3 p-3">
                <img className="w-9 h-9" src={image.htmllogo} alt="" />
                <img className="w-9 h-9" src={image.tailwindlogo} alt="" />
                <img className="w-9 h-9" src={image.jslogo} alt="" />
              </div>
              <p className="text-center font-bold text-2xl">Health Tech</p>
              <p className="text-center px-5 pt-3 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas eligendi quas adipisci odit nihil aliquam enim magnam laborum nam!</p>
            </div>
            <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:translate-x-5">
              <img className="rounded-md " src={image.project1} alt="" />
              <div className="flex justify-end gap-3 p-3">
                <img className="w-9 h-9" src={image.htmllogo} alt="" />
                <img className="w-9 h-9" src={image.tailwindlogo} alt="" />
                <img className="w-9 h-9" src={image.jslogo} alt="" />
              </div>
              <p className="text-center font-bold text-2xl">Health Tech</p>
              <p className="text-center px-5 pt-3 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas eligendi quas adipisci odit nihil aliquam enim magnam laborum nam!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:px-72 xl:px-48 px-5 mt-20 bg-slate-800/90">
        <TittleContent variant={"text-sky-200"} tittletext={"📚Skills"} />
        <p className="text-white text-center text-2xl">As a Frontend Web Developer I have several technologies and tools to create engaging and responsive experiences</p>
        <div className="container mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 py-16 lg:py-32">
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-orange-300 shadow-lg shadow-orange-500/80 animate-border-orange">
            <img className="m-auto" src={image.htmllogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue">
            <img className="m-auto" src={image.csslogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-yellow-300 shadow-lg shadow-yellow-500/80 animate-border-yellow">
            <img className="m-auto" src={image.jslogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue">
            <img className="m-auto" src={image.javalogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue">
            <img className="m-auto" src={image.tailwindlogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-purple-300 shadow-lg shadow-purple-500/80 animate-border-purple">
            <img className="m-auto" src={image.bootstarplogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue">
            <img className="m-auto" src={image.reactlogo} alt="Card Image" />
          </div>
          <div className="relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 ring-orange-300 shadow-lg shadow-orange-500/80 animate-border-orange">
            <img className="m-auto" src={image.laravellogo} alt="Card Image" />
          </div>
        </div>
      </section>

      <section className="2xl:px-72 xl:px-48 px-5">
        <TittleContent variant={"text-sky-600"} tittletext={"💫My Journey"} />
        <h3 className="text-gray-950 text-center lg:text-left text-2xl">This is the journey and experience that I have carried out while being a front end web developer</h3>
        <div className="container my-10">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full md:w-1/2 py-5">
              <img className="rounded-2xl"
                src={image.journey1}
                alt="" />
            </div>

            <div className="relative hidden lg:block bg-yellow-500 w-[2px] mx-10 z-0">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 absolute top-1/2 -left-6 transform -translate-y-1/2 z-50 animate-rotate-star"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M11.65 42L14.9 27.95L4 18.5L18.4 17.25L24 4L29.6 17.25L44 18.5L33.1 27.95L36.35 42L24 34.55L11.65 42Z"
                  fill="#FDE047"
                />
              </svg>
            </div>

            <div className="text-wrap w-full lg:w-1/2 lg:pl-7 py-5">
              <p className="text-start text-lg lg:text-2xl 2xl:text-3xl font-semibold">
                Lab Assistant Basic Web Programming and Advanced Programming
              </p>
              <p className="pt-2 text-start lg:text-lg">
                I am a part-time worker at PGRI Kanjuruhan University, Malang as a Lab Assistant for basic web programming and advanced programming. For basic web programming, there is material about the basics of creating web displays, namely HTML, CSS, and JS. Meanwhile, for advanced programming, the material provided is the Python programming language OOP.
              </p>
              <p className="text-lg font-bold mt-10">
                April - June 2022
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse">
            <div className="w-full md:w-1/2 py-5">
              <img className="rounded-2xl"
                src={image.journey2}
                alt="" />
            </div>

            <div className="relative hidden lg:block bg-yellow-500 w-[2px] mx-10">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 absolute top-1/2 -left-6 transform -translate-y-1/2 z-50 animate-rotate-star"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M11.65 42L14.9 27.95L4 18.5L18.4 17.25L24 4L29.6 17.25L44 18.5L33.1 27.95L36.35 42L24 34.55L11.65 42Z"
                  fill="#FDE047"
                />
              </svg>
            </div>

            <div className="text-wrap w-full lg:w-1/2 lg:pl-7 py-5">
              <p className="text-start text-lg lg:text-2xl 2xl:text-3xl font-semibold">
                <span className="text-gray-600 font-bold">4th</span> Winner IOT General (IMRO)
                International Modern Robotic Olympiad
                Front End Developer
              </p>
              <p className="pt-2 text-start lg:text-lg">
                I took part in the IMRO 2024 competition at STKIP Modern Ngawi in the general IoT category as a Front End Web Developer. My task in the team is to create a web application interface for our team's IoT product, namely smart mirror, the framework that our team uses for web application development is Laravel because it is easy and fast to develop.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full md:w-1/2 py-5">
              <img className="rounded-2xl"
                src={image.journey3}
                alt="" />
            </div>

            <div className="relative hidden lg:block bg-yellow-500 w-[2px] mx-10">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 absolute top-1/2 -left-6 transform -translate-y-1/2 z-50 animate-rotate-star"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M11.65 42L14.9 27.95L4 18.5L18.4 17.25L24 4L29.6 17.25L44 18.5L33.1 27.95L36.35 42L24 34.55L11.65 42Z"
                  fill="#FDE047"
                />
              </svg>
            </div>

            <div className="text-wrap w-full lg:w-1/2 lg:pl-7 py-5">
              <p className="text-start text-lg lg:text-2xl 2xl:text-3xl font-semibold">
                <span className="text-yellow-300 font-bold">1st</span> Winner Web Design Competition
                Universitas Widya Husada Semarang
              </p>
              <p className="pt-2 text-start lg:text-lg">
                I created a landing page web design using HTML, TailwindCSS and JavaScript technology with the theme "Entrepreneurship and Health" and I gave the web title the name HealthTech. This is my first project as a front end web developer and I am trying to submit it to a competition at Widya Husada University Semarang for Indonesia's 78th anniversary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:px-72 xl:px-48 px-5">
        <TittleContent variant={"text-sky-600"} tittletext={"📲Contact Me"} />
        <div className="container lg:flex justify-between">
          <div>
            <img src="https://i.pinimg.com/564x/d4/71/1b/d4711b79e448df376ccbc6281fcce489.jpg" alt="" />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-gray-950 text-center py-5 text-lg lg:text-2xl">Have a question or project you'd like to discuss? Send me a message and I'll get back to you soon!😁</h4>
            <form className="relative lg:translate-y-1/4 flex flex-col gap-5" action="">
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

      <footer className="2xl:px-72 xl:px-48 bg-slate-800/90 mt-20">
        <div className="container py-10">
          <p className="text-slate-50 text-center font-semibold text-4xl">Koozee</p>
          <p className="text-slate-50 text-center font-semibold text-4xl py-5">Follow Me</p>

          <div className="flex gap-5 justify-center pb-3">
            <a href="" className="text-slate-200/80 hover:text-slate-50">
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
            <a href="" className="text-slate-200/80 hover:text-slate-50">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
            <a href="" className="text-slate-200/80 hover:text-slate-50">
              <ion-icon size="large" name="logo-github"></ion-icon>
            </a>
            <a href="" className="text-slate-200/80 hover:text-slate-50">
              <ion-icon size="large" name="logo-youtube"></ion-icon>
            </a>
          </div>
          <hr />
          <p className="text-slate-50 font-semibold pt-4 text-lg pl-5">© Niko Achmad 2024</p>
        </div>
      </footer>
    </>
  );
}

export default App;