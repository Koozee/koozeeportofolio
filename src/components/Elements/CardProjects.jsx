import image from "/src/image";

export default function CardProjects(props) {
    const { imgproject, techs, projectname, projectdesc } = props;

    return (
        <div className="mb-10 xl:mb-0 h-full border-2 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-300/25 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                    className="w-full h-full object-cover object-center rounded-t-md" 
                    src={imgproject} 
                    alt={projectname} 
                />
            </div>
            <div className="flex flex-col h-[calc(100%-56.25%)]"> {/* 56.25% adalah aspect ratio 16:9 */}
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
                <div className="flex-1 flex flex-col p-5">
                    <p className="text-center text-gray-950 dark:text-slate-50 font-bold text-2xl mb-3">
                        {projectname}
                    </p>
                    <p className="text-center text-gray-950 dark:text-slate-50 flex-1">
                        {projectdesc}
                    </p>
                </div>
            </div>
        </div>
    );
}
