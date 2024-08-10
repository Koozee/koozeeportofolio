import TittleContent from "../Elements/TittleContent";
import image from "/src/image";
import JourneyText from "../Elements/JourneyText";
import SeparatorStar from "../Elements/SeparatorStar";
export default function Journey() {
    return (
        <section id="journey" className="2xl:px-72 xl:px-48 px-5">
            <TittleContent variant={"text-sky-600"} tittletext={"💫My Journey"} />
            <h3 className="text-gray-950 text-center lg:text-left text-2xl">This is the journey and experience that I have carried out while being a front end web developer</h3>
            <div className="container my-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full md:w-1/2 py-5">
                        <img className="rounded-2xl"
                            src={image.journey1}
                            alt="j1" />
                    </div>
                    <SeparatorStar />
                    <JourneyText journeyname={"Lab Assistant Basic Web Programming and Advanced Programming"} journeydesc={"I am a part-time worker at PGRI Kanjuruhan University, Malang as a Lab Assistant for basic web programming and advanced programming. For basic web programming, there is material about the basics of creating web displays, namely HTML, CSS, and JS. Meanwhile, for advanced programming, the material provided is the Python programming language OOP."} journeytime={"April - June 2024"} />
                </div>

                <div className="flex flex-col lg:flex-row-reverse">
                    <div className="w-full md:w-1/2 py-5">
                        <img className="rounded-2xl"
                            src={image.journey2}
                            alt="j2" />
                    </div>
                    <SeparatorStar />
                    <JourneyText rank={"4th "} rankcolor={"text-slate-700"} journeyname={"Winner IOT General"} journeydesc={"I took part in the IMRO 2024 competition at STKIP Modern Ngawi in the general IoT category as a Front End Web Developer. My task in the team is to create a web application interface for our team's IoT product, namely smart mirror, the framework that our team uses for web application development is Laravel because it is easy and fast to develop."} journeytime={"October 2023"} />
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full md:w-1/2 py-5">
                        <img className="rounded-2xl"
                            src={image.journey3}
                            alt="j3" />
                    </div>
                    <SeparatorStar />
                    <JourneyText rank={"1st "} rankcolor={"text-yellow-400"} journeyname={"Winner Web Design Competition"} journeydesc={`I created a landing page web design using HTML, TailwindCSS and JavaScript technology with the theme "Entrepreneurship and Health" and I gave the web title the name HealthTech. This is my first project as a front end web developer and I am trying to submit it to a competition at Widya Husada University Semarang for Indonesia's 78th anniversary.`} journeytime={"August 2023"} />
                </div>
            </div>
        </section>
    )
}