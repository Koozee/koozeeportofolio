export default function CardSkills(props) {
    return (
        <div className={`relative mx-auto w-[80%] lg:w-max p-4 bg-slate-200/75 rounded-lg ring-2 shadow-lg ${props.variantborder}`}>
            <img className="m-auto" src={props.skills} alt="Card Image" />
        </div>
    )
}