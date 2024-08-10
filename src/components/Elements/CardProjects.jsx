export default function CardProjects(props) {
    return(
    <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
        <img className="rounded-md " src={props.imgproject} alt="" />
        <div className="flex justify-end gap-3 p-3">
            <img className="w-9 h-9" src={props.tech1} alt="" />
            <img className="w-9 h-9" src={props.tech2} alt="" />
            <img className="w-9 h-9" src={props.tech3} alt="" />
        </div>
        <p className="text-center font-bold text-2xl">{props.projectname}</p>
        <p className="text-center px-5 pt-3 pb-5">{props.projectdesc}</p>
    </div>
    )
}