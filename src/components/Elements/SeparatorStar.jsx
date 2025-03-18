import { motion } from "framer-motion";

export default function SeparatorStar() {
    return (
        <div className="relative left-4 hidden lg:block w-[2px] mx-10 z-0">
            <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-rotate-star"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M11.65 42L14.9 27.95L4 18.5L18.4 17.25L24 4L29.6 17.25L44 18.5L33.1 27.95L36.35 42L24 34.55L11.65 42Z"
                    fill="#FDE047"
                />
            </svg>
        </div>
    )
}