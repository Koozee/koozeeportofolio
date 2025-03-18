import { motion } from "framer-motion";
import ButtonContactHero from "../Elements/ButtonContactHero";
import image from "/src/image";
export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="flex h-screen bg-gradient-to-tr from-white via-white to-sky-300 dark:bg-gradient-to-br dark:from-slate-500 dark:via-slate-600 dark:to-slate-800 px-5 z-0"
    >
      {/* nanti akan diisi form guest saat diawal pages */}
      <div className="container m-auto flex flex-col justify-center items-center w-max gap-y-4 lg:gap-y-2 2xl:gap-y-5">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl 2xl:text-5xl text-purple-600 dark:text-fuchsia-500 font-bold"
        >
          Hello Guys👋,
        </motion.h1>
        
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl 2xl:text-6xl text-purple-600 dark:text-fuchsia-500 font-semibold"
        >
          I am Niko Achmad
        </motion.h2>

        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-x-5 xl:gap-x-6 justify-center"
        >
          <div className="relative w-[39%] lg:w-[30%] 2xl:w-full">
            <h3 className="z-10 absolute text-4xl 2xl:text-6xl font-bold text-blue-600 dark:text-sky-400">
              Frontend
            </h3>
            <div className="z-0 text-transparent top-0 w-full lg:w-[120%] 2xl:w-full h-[110%] transform -translate-x-2 translate-y-2 -rotate-6 rounded-lg bg-gradient-to-r from-[#5fbdff]/50 to-[#e5f4ff]/50 dark:bg-gradient-to-r dark:from-blue-600/50 dark:to-blue-400/50 select-none">
              ------------------------------------------
            </div>
          </div>
          <h3 className="text-4xl 2xl:text-6xl font-bold text-blue-500 dark:text-sky-500">
            Developer
          </h3>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-medium text-slate-600 dark:text-slate-50 text-2xl 2xl:text-3xl text-center lg:w-[60%] mt-5"
        >
          Information engineering student from Malang who has an interest in web
          development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="2xl:mt-10 lg:mt-8 mt-10 grid grid-cols-3 gap-8 lg:gap-16"
        >
          <ButtonContactHero
            linkgoto={"mailto:koozeedev@gmail.com"}
            logo={image.logogmail}
          />
          <ButtonContactHero
            linkgoto={"https://github.com/Koozee"}
            logo={image.logogithub}
          />
          <ButtonContactHero
            linkgoto={"https://www.linkedin.com/in/niko-achmad-705233115/"}
            logo={image.logolinkin}
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
