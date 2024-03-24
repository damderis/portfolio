"use client"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
import NavLink from "./navLink";
import {motion} from "framer-motion"
const links = [
        { url: "/", title: "Home" },
        { url: "/about", title: "About" },
    ];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const topVariants = {
        closed:{
            backgroundColor:"black",
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"white",
        }
        
    }
    const centerVariants = {
        closed:{
            backgroundColor:"black",
            opacity:1,
        },
        opened:{
            opacity:0,
        }
        
    }
    const bottomVariants = {
        closed:{
            backgroundColor:"black",
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"white",
        }
        
    }
    const listVariants = {
        closed:{
            x: "100vw",
        },
        opened:{
            x:0,
            transition:{
                duration:0.3,
                when:"beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }
    const listItemVariants = {
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        },
    }

    return (
        <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-2xl">
            {/*link*/} 
            <div className="hidden md:flex gap-4 w-1/3">
               {links.map((link) => (
                    <NavLink link={link} key={link.title} />
               ))}
            </div>
            {/*social*/} 
            <div className="flex gap-4 w-1/3 md:justify-end">
                <Link href="https://github.com/damderis">
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/adam-idris-976519218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            {/*responsive menu*/}
            <div className="md:hidden">
                {/*menu button*/}
                <button className="w-10 h-8 flex flex-col items-center justify-between z-50 relative"
                onClick={() => setOpen((prev) => !prev)}>
                    <motion.div variants={topVariants} initial="closed" animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} initial="closed" animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded"></motion.div>
                    <motion.div variants={bottomVariants} initial="closed" animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                </button>
                {/*menu list*/}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate={open ? "opened" : "closed"} exit="closed" className="absolute top-0 right-0 w-full h-screen bg-black text-white flex flex-col p-16 items-end justify-start gap-8 text-4xl z-40">
                     {links.map((link) => (
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                         <Link href={link.url}  className="text-white font-mono font-bold z-50">{link.title}</Link>
                        </motion.div>
                     ))}
                </motion.div>
              )}
            </div>
        </div>
        
    )
}

export default Navbar