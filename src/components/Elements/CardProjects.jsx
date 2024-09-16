import image from "/src/image";
export default function CardProjects(props) {
    return (
        <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-300/25 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
            <img className="rounded-md " src={props.imgproject} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-3 p-3">
                    <img className="w-9 h-9" src={image.logogithub} alt="" />
                    <img className="w-9 h-9" src={image.logogithub} alt="" />
                </div>
                <div className="flex gap-3 p-3">
                    <img className="w-9 h-9" src={props.tech1} alt="" />
                    <img className="w-9 h-9" src={props.tech2} alt="" />
                    <img className="w-9 h-9" src={props.tech3} alt="" />
                </div>
            </div>
            <p className="text-center text-gray-950 dark:text-slate-50 font-bold text-2xl">{props.projectname}</p>
            <p className="text-center text-gray-950 dark:text-slate-50 px-5 pt-3 pb-5">{props.projectdesc}</p>
        </div>
    )
}