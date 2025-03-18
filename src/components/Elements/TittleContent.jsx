import { motion } from "framer-motion";

export default function TittleContent(props) {
  return (
    <motion.div
      className="z-0 py-14 lg:py-20"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between">
        <div className="relative">
          <motion.h3
            className={`absolute z-10 w-max text-3xl xl:text-5xl font-bold ${props.variant} dark:text-sky-300`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {props.tittletext}
          </motion.h3>
          <motion.div
            className="z-0 w-full h-[150%] xl:h-[200%] text-transparent top-0 transform -translate-x-2 translate-y-2 -rotate-6 rounded-lg bg-gradient-to-r from-[#5fbdff]/50 to-[#e5f4ff]/50 dark:from-blue-600/50 dark:to-blue-400/50 select-none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            -----------------------------------------------
          </motion.div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}
