import TittleContent from "../Elements/TittleContent";
import CardProjects from "../Elements/CardProjects";
import image from "/src/image";
export default function Projects() {
    
    return (
        <section id="project" className="2xl:px-72 xl:px-48 px-5">
            <TittleContent variant={"text-sky-600"} tittletext={"🚀Amazing Project"} />
            <h3 className="text-gray-950 text-xl xl:text-2xl text-justify xl:text-center">As a frontend web developer, I have worked on various projects that showcase my skills and creativity. Explore my work and see how I turn ideas into amazing web experiences.</h3>
            <div className="container mt-16">
                <div className="xl:grid grid-cols-2 gap-10">
                    <CardProjects imgproject={image.project1} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"Health Tech"} projectdesc={"loremufhgiaghfig"}/>
                    <CardProjects imgproject={image.project1} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"Smart Mirror Web Control"} projectdesc={"loremufhgiaghfig"}/>
                    <CardProjects imgproject={image.project1} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"IslamSphere"} projectdesc={"loremufhgiaghfig"}/>
                    <CardProjects imgproject={image.project1} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"Jatrip"} projectdesc={"loremufhgiaghfig"}/>
                </div>
            </div>
        </section>
    )
}