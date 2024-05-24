import Image from "next/image"
const Skills = ({skill, img}) => {
    return (
        <div className="flex flex-row items-center w-fit h-12
        font-mono font-bold rounded p-2 
        bg-red-800 text-white text-sm 
        hover:bg-white hover:text-black hover:ring-2 hover:ring-red-800 ">
            <Image src={img} alt={skill} width={24} height={24}/>
            <h1 className="w-5/6 ml-2">{skill}</h1>
        </div>
    )
}

export default Skills