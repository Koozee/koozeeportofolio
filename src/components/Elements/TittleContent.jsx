export default function TittleContent(props) {
    return (
        <div className="z-0 py-14 lg:py-20">
            <div className="flex justify-between">
                <div className="relative">
                    <h3 className={`absolute z-10 w-max text-3xl xl:text-5xl font-bold ${props.variant}`}>{props.tittletext}</h3>
                    <div className="z-0 w-full h-[150%] xl:h-[200%] text-transparent top-0 transform -translate-x-2 translate-y-2 -rotate-6 rounded-lg bg-gradient-to-r from-[#5fbdff]/50 to-[#e5f4ff]/50">-----------------------------------------------</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}