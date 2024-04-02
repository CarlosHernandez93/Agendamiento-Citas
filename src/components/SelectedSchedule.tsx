import { specealist } from "@/api/infoDB"

export default function SelectSchedule(){

    const scheduleList:string[] = specealist['Carlos Hernandez']

    return(
        <ul className="mt-12 px-8 overflow-hidden h-72">
            {
               scheduleList.map((name, index) => {
                return (
                    <li key={index} className="text-center py-3 border-y flex justify-center gap-3 items-center">
                        <span>{name}</span>
                        <div className="bg-green-700 h-3 w-3 rounded-3xl"></div>
                    </li>
                )
               }) 
            }
        </ul>
    )
}