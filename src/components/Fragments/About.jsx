import TittleContent from "../Elements/TittleContent";
import Description from "../Elements/Description";
import image from "/src/image";
export default function About(props) {
    return (
        <article id="about" className="2xl:px-72 xl:px-48 px-5 dark:bg-slate-800">
            <TittleContent variant={"text-sky-600"} tittletext={"😎About Me"} />
            <div className="container flex flex-col-reverse md:flex-row justify-between gap-3">
                <Description />
                <img className="md:w-1/2 xl:w-1/3" src={image.akudewe} alt="profile_pict" />
            </div>
        </article>
    )
}