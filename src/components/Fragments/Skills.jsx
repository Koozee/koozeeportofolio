import TittleContent from "../Elements/TittleContent";
import image from "/src/image";
import CardSkills from "../Elements/CardSkills";
import { motion } from "framer-motion";

export default function Skills() {
    // Variasi animasi untuk card skills
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.section 
            className="2xl:px-72 xl:px-48 px-5 bg-slate-800/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <TittleContent variant={"text-sky-200"} tittletext={"📚Skills"} />
            <motion.p 
                className="text-white text-center text-2xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                As a Frontend Web Developer I have several technologies and tools to create engaging and responsive experiences
            </motion.p>
            <motion.div 
                className="container mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 py-16 lg:py-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {[
                    { skills: image.htmllogo, variantborder: "ring-orange-300 shadow-orange-500/80 animate-border-orange" },
                    { skills: image.csslogo, variantborder: "ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue" },
                    { skills: image.jslogo, variantborder: "ring-yellow-300 shadow-lg shadow-yellow-500/80 animate-border-yellow" },
                    { skills: image.javalogo, variantborder: "ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue" },
                    { skills: image.tailwindlogo, variantborder: "ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue" },
                    { skills: image.bootstraplogo, variantborder: "ring-purple-300 shadow-lg shadow-purple-500/80 animate-border-purple" },
                    { skills: image.reactlogo, variantborder: "ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue" },
                    { skills: image.laravellogo, variantborder: "ring-orange-300 shadow-orange-500/80 animate-border-orange" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <CardSkills skills={item.skills} variantborder={item.variantborder} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}