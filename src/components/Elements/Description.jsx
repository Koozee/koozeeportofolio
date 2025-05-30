import { motion } from "framer-motion";

export default function Description() {
    return (
        <motion.div 
            className="xl:w-2/3 xl:pr-20 text-justify"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-gray-950 dark:text-slate-50 font-light text-xl lg:text-2xl 2xl:text-3xl">Hi, I'm Niko Achmad, a front end developer from Malang. I am a Bachelor of Informatics Engineering student from Universitas PGRI Kanjuruhan Malang. I am very interested in the world of programming, especially in web development, my favorite programming language is javascript because it is easy to learn, modern, and has a large community. I am not only a coder but also creative, problem solving and can adapt to new things.</p>
            <p className="text-gray-950 dark:text-slate-50 font-light text-xl lg:text-2xl 2xl:text-3xl py-5">With a strong background in web fundamentals I enjoy creating engaging and functional digital experiences. Besides coding, I enjoy exploring technology, playing games, and exploring nature.</p>
        </motion.div>
    )
}