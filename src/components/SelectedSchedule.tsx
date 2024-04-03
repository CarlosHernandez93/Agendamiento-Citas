import { specealist } from "@/api/infoDB"

export default function SelectSchedule(){

    const scheduleList:string[] = specealist['Carlos Hernandez']

    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Horarios</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="hover:overflow-y-scroll">
                    {
                    scheduleList.map((name, index) => {
                        return (
                            <li key={index} className="text-center py-3 border-y flex justify-center gap-3 items-center cursor-pointer">
                                <span>{name}</span>
                                <div className="bg-green-700 h-3 w-3 rounded-3xl"></div>
                            </li>
                        )
                    }) 
                    }
                </ul>
            </div>
        </section>
    )
}