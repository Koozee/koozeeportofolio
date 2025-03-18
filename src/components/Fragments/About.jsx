import TittleContent from "../Elements/TittleContent";
import Description from "../Elements/Description";
import image from "/src/image";
import { motion } from "framer-motion";

export default function About(props) {
    return (
        <motion.article 
            id="aboutme" 
            className="2xl:px-72 xl:px-48 px-5 dark:bg-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <TittleContent variant={"text-sky-600"} tittletext={"😎About Me"} />
            <div className="container flex flex-col-reverse md:flex-row justify-between gap-3">
                <Description />
                <motion.img 
                    className="md:w-1/2 xl:w-1/3" 
                    src={image.akudewe} 
                    alt="profile_pict"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </motion.article>
    )
}