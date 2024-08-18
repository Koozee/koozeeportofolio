import TittleContent from "../Elements/TittleContent";
import CardProjects from "../Elements/CardProjects";
import image from "/src/image";
export default function Projects() {

    return (
        <section id="project" className="2xl:px-72 xl:px-48 px-5 py-10 dark:bg-slate-800">
            <TittleContent variant={"text-sky-600"} tittletext={"🚀Amazing Project"} />
            <h3 className="text-gray-950 text-xl xl:text-2xl text-justify xl:text-center dark:text-slate-50">As a frontend web developer, I have worked on various projects that showcase my skills and creativity. Explore my work and see how I turn ideas into amazing web experiences.</h3>
            <div className="container mt-16">
                <div className="xl:grid grid-cols-2 gap-10">
                    <CardProjects imgproject={image.project1} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"Health Tech"} projectdesc={"This is my first project as a front end web developer. A landing page themed around entrepreneurship and health. I created this project using HTML, TailwindCSS, and JavaScript."} />
                    <CardProjects imgproject={image.project2} tech1={image.laravellogo} tech2={image.tailwindlogo} tech3={image.mysqllogo} projectname={"Smart Mirror Web Control"} projectdesc={"Web application created using the laravel framework, this web functions to control an IoT device called Smart Mirror. This project was created by the Indo Asia Intertech team to compete in IMRO 2023 in Ngawi."} />
                    <CardProjects imgproject={image.project3} tech1={image.htmllogo} tech2={image.tailwindlogo} tech3={image.jslogo} projectname={"IslamSphere"} projectdesc={"This is an Islamic-themed landing page, this website is a place for online guidance on Islamic teachings."} />
                    <CardProjects imgproject={image.project4} tech1={image.nextjslogo} tech2={image.tailwindlogo} tech3={image.mysqllogo} projectname={"Jatrip Explore Jatim"} projectdesc={"Jatrip is a web application to help users explore East Java. Starting from tourism, culture, culinary and others. Also equipped with a chatbot that is an online assistant for users. This project is still in the development stage using NextJS."} />
                </div>
            </div>
        </section>
    )
}