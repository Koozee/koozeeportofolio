export default function JourneyText(props) {
    return (
        <div className="text-wrap w-full lg:w-1/2 lg:pl-7 py-5">
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
        </div>
    )
}