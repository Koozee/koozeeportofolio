import TittleContent from "../Elements/TittleContent";
import CardProjects from "../Elements/CardProjects";
import image from "/src/image";

export default function Projects() {
  const projects = [
    {
      imgproject: image.project1,
      techs: [image.htmllogo, image.tailwindlogo, image.jslogo],
      projectname: "Health Tech",
      projectdesc:
        "This is my first project as a front end web developer. A landing page themed around entrepreneurship and health. I created this project using HTML, TailwindCSS, and JavaScript.",
    },
    {
      imgproject: image.project2,
      techs: [image.laravellogo, image.tailwindlogo, image.mysqllogo],
      projectname: "Smart Mirror Web Control",
      projectdesc:
        "Web application created using the laravel framework, this web functions to control an IoT device called Smart Mirror. This project was created by the Indo Asia Intertech team to compete in IMRO 2023 in Ngawi.",
    },
    {
      imgproject: image.project3,
      techs: [image.htmllogo, image.tailwindlogo, image.jslogo],
      projectname: "IslamSphere",
      projectdesc:
        "This is an Islamic-themed landing page, this website is a place for online guidance on Islamic teachings.",
    },
    {
      imgproject: image.project4,
      techs: [image.nextjslogo, image.tailwindlogo, image.mongodblogo],
      projectname: "Jatrip Explore Jatim",
      projectdesc:
        "Jatrip is a web application to help users explore East Java. Starting from tourism, culture, culinary and others. Also equipped with a chatbot that is an online assistant for users. This project is still in the development stage using NextJS.",
    },
    {
      imgproject: image.project5,
      techs: [image.awslogo,image.mongodblogo, image.expresslogo, image.reactlogo, image.nodejslogo],
      projectname: "Pasar Malangan",
      projectdesc:
        "MERN stack based web app that supports UMKM in Malang by managing and connecting their products to external marketplaces such as Shopee and Tokopedia without a payment gateway feature. Built on AWS infrastructure and designed to provide a scalable and efficient experience for users.",
    },
  ];

  return (
    <section
      id="project"
      className="2xl:px-72 xl:px-48 px-5 py-10 dark:bg-slate-800"
    >
      <TittleContent
        variant={"text-sky-600"}
        tittletext={"🚀Amazing Project"}
      />
      <h3 className="text-gray-950 text-xl xl:text-2xl text-justify xl:text-center dark:text-slate-50">
        As a frontend web developer, I have worked on various projects that
        showcase my skills and creativity. Explore my work and see how I turn
        ideas into amazing web experiences.
      </h3>
      <div className="container mt-16">
        <div className="xl:grid grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <CardProjects
              key={index}
              imgproject={project.imgproject}
              techs={project.techs}
              projectname={project.projectname}
              projectdesc={project.projectdesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
