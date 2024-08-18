import TittleContent from "../Elements/TittleContent";
import image from "/src/image";
import CardSkills from "../Elements/CardSkills";
export default function Skills() {

    return (
        <section className="2xl:px-72 xl:px-48 px-5 bg-slate-800/90">
            <TittleContent variant={"text-sky-200"} tittletext={"📚Skills"} />
            <p className="text-white text-center text-2xl">As a Frontend Web Developer I have several technologies and tools to create engaging and responsive experiences</p>
            <div className="container mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 py-16 lg:py-32">
                <CardSkills skills={image.htmllogo} variantborder={"ring-orange-300 shadow-orange-500/80 animate-border-orange"} />
                <CardSkills skills={image.csslogo} variantborder={"ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue"} />
                <CardSkills skills={image.jslogo} variantborder={"ring-yellow-300 shadow-lg shadow-yellow-500/80 animate-border-yellow"} />
                <CardSkills skills={image.javalogo} variantborder={"ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue"} />
                <CardSkills skills={image.tailwindlogo} variantborder={"ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue"} />
                <CardSkills skills={image.bootstraplogo} variantborder={"ring-purple-300 shadow-lg shadow-purple-500/80 animate-border-purple"} />
                <CardSkills skills={image.reactlogo} variantborder={"ring-blue-300 shadow-lg shadow-blue-500/80 animate-border-blue"} />
                <CardSkills skills={image.laravellogo} variantborder={"ring-orange-300 shadow-orange-500/80 animate-border-orange"} />
            </div>
        </section>
    )
}