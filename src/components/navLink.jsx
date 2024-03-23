"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const NavLink = ({link}) => {

    const pathName = usePathname();

    return (
    <Link className={`
    rounded p-3 items-center font-mono ${pathName === link.url && 
        "bg-red-800 text-white font-mono font-bold"}`} href={link.url}>
            {link.title}
    </Link>
    

)
}

export default NavLink