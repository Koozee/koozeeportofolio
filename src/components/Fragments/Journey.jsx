import TittleContent from "../Elements/TittleContent";
import image from "/src/image";
import JourneyText from "../Elements/JourneyText";
import SeparatorStar from "../Elements/SeparatorStar";
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <motion.section
      id="journey"
      className="2xl:px-72 xl:px-48 px-5 dark:bg-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TittleContent variant={"text-sky-600"} tittletext={"💫My Journey"} />
      <motion.h3
        className="text-gray-950 text-center lg:text-left text-2xl dark:text-slate-50"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        This is the journey and experience that I have carried out while being a
        front end web developer
      </motion.h3>
      <div className="container py-10 relative">
        <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block">
          <div className="relative h-full bg-yellow-500 w-[2px] mx-10"></div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row-reverse relative">
            <motion.div
              className="w-full md:w-1/2 py-5 lg:pl-16"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                className="rounded-2xl"
                src={image.journey4}
                alt="j4"
              />
            </motion.div>
            <SeparatorStar />
            <JourneyText
              isEven={true}
              rankcolor={"text-slate-700 dark:text-slate-400"}
              journeyname={"AWS Certification | Full Stack Cloud Engineering "}
              journeydesc={
                "I am a participant in MSIB Batch 7 in the field of AWS Certification | Full Stack Cloud Engineering at the Social Economic Accelerator Lab (SEAL). At MSIB I learned a lot about DevOps and also Cloud Computing, namely AWS. After studying for 3 months, I as DevOps Lead and Full Stack Programmer with the team succeeded in creating a web app called Pasar Malangan which was built on AWS infrastructure and used MERN Stack technology."
              }
              journeytime={"September 2024 – December 2024"}
            />
          </div>

          <div className="flex flex-col lg:flex-row">
            <motion.div
              className="w-full md:w-1/2 py-5 lg:pr-16"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                className="rounded-2xl"
                src={image.journey1}
                alt={image.journey1}
              />
            </motion.div>
            <SeparatorStar />
            <JourneyText
              isEven={false}
              journeyname={
                "Lab Assistant Basic Web Programming and Advanced Programming"
              }
              journeydesc={
                "I am a part-time worker at PGRI Kanjuruhan University, Malang as a Lab Assistant for basic web programming and advanced programming. For basic web programming, there is material about the basics of creating web displays, namely HTML, CSS, and JS. Meanwhile, for advanced programming, the material provided is the Python programming language OOP."
              }
              journeytime={"April - June 2024"}
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse">
            <motion.div
              className="w-full md:w-1/2 py-5 lg:pl-16"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                className="rounded-2xl"
                src={image.journey2}
                alt={image.journey2}
              />
            </motion.div>
            <SeparatorStar />
            <JourneyText
              isEven={true}
              rank={"4th "}
              rankcolor={"text-slate-700 dark:text-slate-400"}
              journeyname={"Winner IOT General"}
              journeydesc={
                "I took part in the IMRO 2024 competition at STKIP Modern Ngawi in the general IoT category as a Front End Web Developer. My task in the team is to create a web application interface for our team's IoT product, namely smart mirror, the framework that our team uses for web application development is Laravel because it is easy and fast to develop."
              }
              journeytime={"October 2023"}
            />
          </div>

          <div className="flex flex-col lg:flex-row">
            <motion.div
              className="w-full md:w-1/2 py-5 lg:pr-16"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                className="rounded-2xl"
                src={image.journey3}
                alt={image.journey3}
              />
            </motion.div>
            <SeparatorStar />
            <JourneyText
              isEven={false}
              rank={"1st "}
              rankcolor={"text-yellow-400"}
              journeyname={"Winner Web Design Competition"}
              journeydesc={`I created a landing page web design using HTML, TailwindCSS and JavaScript technology with the theme "Entrepreneurship and Health" and I gave the web title the name HealthTech. This is my first project as a front end web developer and I am trying to submit it to a competition at Widya Husada University Semarang for Indonesia's 78th anniversary.`}
              journeytime={"August 2023"}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
