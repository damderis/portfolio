"use client"
import Image from "next/image";
import{motion} from "framer-motion";
const Homepage = () => {
  return (
  <motion.div className="h-full"
  initial={{y:"-200vh"}}
  animate={{y:"0%"}}
  transition={{duration:0.7}}>
  <div className="h-full w-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-8 overflow-scroll">
      {/*image container*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/webport.png" alt="" fill className="object-contain mb-5"/>
      </div>
      {/*text container*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center gap-8">
        {/*title*/}
        <h1 className="w-full text-xl sm:text-3xl md:text-4xl font-mono text-black font-black">Simple, Efficient, Responsible</h1>
        {/*description*/}
        <p className="text-black text-12px md:text-lg text-justify font-mono">
          Welcome to my homepage! I'm Adam Idris, 
          a third-year student deeply passionate 
          about blending technical skill with astute 
          problem-solving. Join me on my 
          journey of expertise and innovation.</p>
        {/*buttons*/}
        <div className="w-full flex gap-4">
          <button onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=19Z-Fpn0MewHoz4pXp6aHCPIFG9xMWPf6"} className="bg-white text-red-800 hover:bg-red-800 hover:text-white p-2 rounded-md ring-2 ring-black font-mono font-bold">Download Resume</button>
          <button onClick={() => window.location.href = "mailto:idrisismol@gmail.com"} className="bg-white text-black p-2 rounded-md ring-2 ring-black hover:bg-black hover:text-white font-mono font-bold">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
    )
};

export default Homepage;
