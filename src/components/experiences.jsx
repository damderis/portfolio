"use client"
const Experiences = ({jobtitle, jobdesc, jobdate, company}) => {
    return (
        <div className="flex flex-col w-full gap-4 justify-center items-center p-4 ring-2 bg-white ring-red-800 rounded-sm">
            <div className="text-md bg-red-800 p-4 text-white 
            ring-2 ring-black 
            font-mono font-bold rounded-sm">
            {jobtitle}
            </div>
            <div className="flex lg:w-1/2 justify-center text-center font-mono font-bold text-sm italic text-gray-600">
            {jobdesc}
            </div>
            <div className="font-mono font-bold text-sm italic text-red-800">
            {jobdate}
            </div>
            <div className="font-mono font-bold text-sm text-black">
            {company}
            </div>
        </div>
    )
}

export default Experiences