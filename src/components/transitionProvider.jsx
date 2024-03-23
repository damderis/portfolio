"use client"
import {AnimatePresence, motion} from "framer-motion"
import Navbar from "@/components/navbar";
import {usePathname} from "next/navigation";
const TransitionProvider = ({children}) => {

    const pathName = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg bg-gradient-to-b from-purple-100 to-red-100">
                <motion.div className="h-screen w-screen fixed bg-black rounded-r-[100px] z-40"
                animate={{width:"0vw"}}
                exit={{width:"140vw"}}
                transition={{duration:0.5, ease:"easeOut"}}/>
                <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 font-mono font-bold text-white text-8xl cursor-default bg-black z-50 w-fit h-fit"
                initial={{opacity:1}}
                animate={{opacity:0}}
                exit={{opacity:0}}
                transition={{duration:0.8, ease:"easeOut"}}>
                    {pathName === "/" ? "home" : pathName.substring(1)}
                </motion.div>
                <motion.div className="h-screen w-screen fixed bg-black rounded-r-[100px] bottom-0 z-40"
                initial={{width:"140vw"}}
                animate={{width:"0vw", transition:{delay:0.5}}}/>
                <div className="h-24">
                    <Navbar/>
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;