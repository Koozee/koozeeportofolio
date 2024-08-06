export default function Buttoncontact(props) {
    return (
        <a href={props.linkgoto} className="flex justify-center items-center bg-slate-300 p-3 rounded-3xl shadow-slate-600 shadow-xl transform hover:rotate-12 hover:scale-110 focus:-rotate-45 focus:bg-blue-300 transition-all ease-in-out duration-200">
            <img src={props.logo} className="bg-slate-200 p-2 rounded-2xl w-16 lg:w-24 h-auto" alt="logocontact" />
        </a>
    )
}