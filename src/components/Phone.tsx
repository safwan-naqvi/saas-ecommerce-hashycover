import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string,
    dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <img className="pointer-events-none z-50 select-none" src={dark ? "/images/phone-template-dark-edges.png" : "/images/phone-template-white-edges.png"} alt="" />
            <div className="absolute -z-10 inset-0">
                <img className="object-cover" src={imgSrc} alt="Overlaying Phone Image" />
            </div>
        </div>
    )
}

export default Phone
