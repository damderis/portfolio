const Skills = ({skill}) => {
    return (
        <div className="font-mono font-bold rounded p-2 bg-black text-white text-sm hover:bg-white hover:text-black hover:ring-2 hover:ring-red-800 ">
            <h1>{skill}</h1>
        </div>
    )
}

export default Skills