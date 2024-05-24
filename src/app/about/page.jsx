"use client"
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import{motion, useInView} from "framer-motion";
import { useRef } from "react";
const AboutPage = () => {

    const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    return (
        <motion.div className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}}>
        {/*container*/}
        <div className="h-full overflow-scroll lg:flex">
            {/*text container*/}
            <div className="p-4 sm:p-8 md:p-12 flex flex-col gap-24" >
                {/*biodata container*/}
                <div className="flex flex-col gap-5 justify-center">
                    {/*title*/}
                    <h1 className="text-3xl font-mono font-bold">
                        About</h1>
                    {/*description*/}
                    <p className="text-lg font-mono bg-white ring-2 ring-red-800 rounded-sm p-4">
                        I am Adam Idris, a dedicated enthusiast in computer science and 
                        design, honing my skills over several years. 
                        Currently in my third year of studying Computer Sciences 
                        with a major in Computer Network, I am also delving 
                        into software engineering frameworks and 
                        exploring the realm of business analytics in my spare time.
                        Looking ahead, my goal is to continue expanding my knowledge base, mastering new 
                        technologies, and ultimately giving back to society through impactful contributions. 
                        With a steadfast commitment to growth and a passion for innovation, I am poised to make 
                        meaningful strides in the ever-evolving field of technology.
</p>
                        <div className="self-end"><svg width="100" height="100" viewBox="0 0 239 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.7791 200.754C39.6494 156.029 46.8353 112.074 50.4458 67.5873C51.9001 49.6685 52.3733 32.1775 50.3347 14.3095C49.9188 10.6643 48.9752 7.02879 49.168 3.36505C49.5102 -3.13568 54.2672 15.359 56.3347 21.5317C71.4845 66.7625 85.0678 114.621 111.335 155.032C114.521 159.934 95.5599 150.292 95.1125 150.087C77.6455 142.093 60.5782 133.287 42.9458 125.643C31.1323 120.521 19.807 115.444 6.77915 115.754C-0.419679 115.925 0.942597 119.729 8.00137 118.087C22.1935 114.787 35.6115 106.277 47.7236 98.5873C71.9276 83.2212 95.6189 65.973 116.224 45.9762C129.063 33.5159 119.136 42.5383 128.779 32.4206C129.342 31.8302 130.004 30.391 130.668 30.865C131.397 31.3857 130.602 32.6768 130.335 33.5317C129.467 36.3057 128.361 39.0008 127.279 41.6984C115.489 71.0929 99.6779 98.6608 83.7791 125.976C72.8161 144.812 61.7548 163.575 51.0014 182.532C47.4241 188.838 38.324 205.585 45.7236 185.921C62.1421 142.288 88.1898 102.84 109.89 61.7539C111.004 59.6444 110.99 54.5829 113.224 55.4206C114.837 56.0257 115.162 58.3287 115.668 59.9762C120.361 75.2628 121.882 91.9151 123.446 107.698C126.538 138.913 126.779 170.096 126.779 201.421C126.779 206.199 128.827 217.592 126.501 222.476C123.072 229.678 107.725 236.045 100.779 230.643C88.5473 221.129 160.314 191.266 164.779 189.198C186.791 179.008 208.387 168.141 229.057 155.421C230.062 154.802 235.234 151.744 236.779 150.198C238.639 148.338 234.214 148.863 233.779 148.754" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M73.7791 194.754C88.231 186.083 101.028 173.011 113.946 162.365C137.139 143.251 160.423 124.157 184.446 106.087C191.812 100.546 198.701 94.8319 205.224 88.3095C206.74 86.7931 207.893 85.6402 205.779 87.7539" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M219.779 85.7539V86.7539" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg></div>
                        </div>
                    
                {/*skillcontainer*/}
                <div className="flex flex-col gap-5 justify-center" ref={skillRef}>
                    {/*skill title*/}
                    <motion.h1 initial={{ x: "-300px" }}
                        animate={isSkillRefInView ? { x: 0 } : {}}
                        transition={{ delay: 0.2 }} 
                        className="text-3xl font-mono font-bold">
                        My Skills</motion.h1>
                        {/*skill list*/}
                        <motion.div initial={{ x: "-300vw" }}
                         animate={isSkillRefInView ? { x: 0 } : {}}
                         transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-wrap gap-4">
                            <Skills skill="HTML" img="/html.png"/>
                            <Skills skill="Javascript" img="/js.png"/>
                            <Skills skill="Next.js" img="/nextjs.png"/>
                            <Skills skill="Tailwind CSS" img="/tailwindcss.png"/>
                            <Skills skill="CSS" img="/css.png"/>
                            <Skills skill="ChatGPT" img="/chatgpt.png"/>
                            <Skills skill="Node.js" img="/nodejs.png"/>
                            <Skills skill="GitHub" img="/github.png"/>
                            <Skills skill="Figma" img="/figma.png"/>
                            <Skills skill="AdobePhotoshop" img="/ap.png"/>
                            <Skills skill="AdobeIllustrator" img="/ai.png"/>
                            <Skills skill="AdobeXD" img="/axd.png"/>
                            <Skills skill="FastAPI" img="/fastapi.png"/>
                            
                        </motion.div>
                        </div>
            {/*experience container*/}
                <div className="flex flex-col gap-5 justify-center pb-48" ref={experienceRef}>
                    {/*Experiences title*/}
                    <motion.h1 className="text-3xl font-mono font-bold"
                        initial={{ x: "-300px" }}
                        animate={isExperienceRefInView ? { x: "0" } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}>
                        Experiences</motion.h1>
                    {/*experience list*/}
                    <motion.div className=""
                    initial={{ x: "-300vw" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}>
                        {/*experience item*/}
                        <div className="gap-4 flex flex-col ">
                            {/*left*/}
                            <Experiences 
                            jobtitle="Freelance" 
                            jobdesc="Through self-study, I've mastered HTML, CSS, JavaScript, and design tools. Each project reflects my commitment to excellence, surpassing expectations and showcasing my evolving skills." 
                            jobdate="Since December 2022" 
                            company=""/>
                            <Experiences 
                            jobtitle="Graphic Designer" 
                            jobdesc="Fully utilizes Adobe Illustrator, Adobe Photoshop in designing projects" 
                            jobdate="January 2020 - June 2020" 
                            company="Tinta Warisan Jauhar"/>
                            {/*center*/}
                            {/*right*/}
                        </div>
                    </motion.div> 
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default AboutPage
