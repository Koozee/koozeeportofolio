export default function Footer() {

    return (
        <footer className="2xl:px-72 xl:px-48 bg-slate-800/90">
            <div className="container py-10">
                <p className="text-slate-50 text-center font-semibold text-4xl">Koozee</p>
                <p className="text-slate-50 text-center font-semibold text-4xl py-5">Follow Me</p>
                <div className="flex gap-5 justify-center pb-3">
                    <a href="https://www.facebook.com/niko.achmad.3/?locale=id_ID" className="text-slate-200/80 hover:text-slate-50" target="_blank">
                        <ion-icon size="large" name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/nikoachmad_koo/" className="text-slate-200/80 hover:text-slate-50" target="_blank">
                        <ion-icon size="large" name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://github.com/Koozee" className="text-slate-200/80 hover:text-slate-50" target="_blank">
                        <ion-icon size="large" name="logo-github"></ion-icon>
                    </a>
                    <a href="https://www.youtube.com/@achmadxniko" className="text-slate-200/80 hover:text-slate-50" target="_blank">
                        <ion-icon size="large" name="logo-youtube"></ion-icon>
                    </a>
                </div>
                <hr />
                <p className="text-slate-50 font-semibold pt-4 text-lg pl-5">© Niko Achmad 2024</p>
            </div>
        </footer>
    )
}