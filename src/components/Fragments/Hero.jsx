import ButtonContactHero from "../Elements/ButtonContactHero";
import image from "/src/image";
export default function Hero(props) {
    return (
        <main id="home" className="flex h-screen bg-gradient-to-tr from-white via-white to-sky-300 px-5 z-0">
            {/* nanti akan diisi form guest saat diawal pages */}
            <div className="container m-auto flex flex-col justify-center items-center w-max gap-y-5">
                <h1 className="text-4xl lg:text-5xl  text-purple-600 font-bold">Hello Guys👋,</h1>
                <h2 className="text-4xl lg:text-6xl text-purple-600 font-semibold">I am Niko Achmad</h2>
                <div className="flex gap-x-5 xl:gap-x-6 justify-center">
                    <div className="relative w-[40%] lg:w-full">
                        <h3 className="z-10 absolute text-4xl lg:text-6xl font-bold text-blue-600">Frontend</h3>
                        <div className="z-0 text-transparent top-0 w-full h-[110%] transform -translate-x-2 translate-y-2 -rotate-6 rounded-lg bg-gradient-to-r from-[#5fbdff]/50 to-[#e5f4ff]/50">--------------------------------------</div>
                    </div>
                    <h3 className="text-4xl lg:text-6xl  font-bold text-blue-500">Developer</h3>
                </div>
                <p className="font-medium text-slate-600 text-2xl lg:text-3xl text-center lg:w-[60%] mt-5">Information engineering student from Malang who has an interest in web development</p>
                <div className="mt-10 grid grid-cols-3 gap-8 lg:gap-16">
                    <ButtonContactHero linkgoto={"mailto:nicoachmad15@gmail.com"} logo={image.logogmail} />
                    <ButtonContactHero linkgoto={"https://github.com/Koozee"} logo={image.logogithub} />
                    <ButtonContactHero linkgoto={"https://www.linkedin.com/in/niko-achmad-705233115/"} logo={image.logolinkin} />
                </div>
            </div>
        </main>
    )
}