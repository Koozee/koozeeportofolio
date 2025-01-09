import image from "/src/image";

export default function CardProjects(props) {
    const { imgproject, techs, projectname, projectdesc } = props; // Ambil props yang diperlukan

    return (
        <div className="mb-10 xl:mb-0 border-2 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-300/25 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
            <img className="rounded-md" src={imgproject} alt={projectname} />
            <div className="flex justify-between dark:bg-slate-100/80 dark:shadow-inner dark:shadow-slate-200">
                <div className="flex gap-3 p-3">
                    <img className="w-9 h-9" src={image.logogithub} alt="GitHub Logo" />
                </div>
                <div className="flex gap-3 p-3">
                    {/* Looping melalui array techs dan render setiap gambar */}
                    {techs && techs.map((tech, index) => (
                        <img key={index} className="w-9 h-9" src={tech} alt={`tech-${index}`} />
                    ))}
                </div>
            </div>
            <p className="text-center text-gray-950 dark:text-slate-50 font-bold text-2xl">{projectname}</p>
            <p className="text-center text-gray-950 dark:text-slate-50 px-5 pt-3 pb-5">{projectdesc}</p>
        </div>
    );
}
