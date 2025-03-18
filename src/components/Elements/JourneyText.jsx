import { motion } from "framer-motion";

export default function JourneyText(props) {
    return (
        <motion.div 
            className="text-wrap w-full lg:w-1/2 lg:pl-7 py-5 flex flex-col justify-center"
            initial={{ x: props.isEven ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-gray-950 dark:text-slate-50 text-start text-lg lg:text-2xl 2xl:text-3xl font-semibold">
                <span className={`${props.rankcolor} font-bold`}>{props.rank}</span>
                {props.journeyname}
            </p>
            <p className="text-gray-950 dark:text-slate-50 pt-2 text-start lg:text-lg">
                {props.journeydesc}
            </p>
            <p className="text-gray-950 dark:text-slate-50 text-lg font-bold mt-10">
                {props.journeytime}
            </p>
        </motion.div>
    )
}