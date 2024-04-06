'use client'
import { specealist } from "@/apiss/infoDB"
import { useSelectedSchedule } from "@/hooks/useSelectedSchedule"

export default function SelectSchedule(){

    const scheduleList:string[] = specealist['Carlos Hernandez']
    const {isSelectedSchedule, changeOtherSelectSchedule} = useSelectedSchedule()
    let classNameItem: string
    let classNamePoint: string

    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Horarios</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="h-full hover:overflow-y-scroll hover:scroll-smooth">
                    {
                    scheduleList.map((name, index) => {
                        classNameItem = isSelectedSchedule === index
                                    ? 'text-center py-3 border-y flex justify-center gap-3 items-center cursor-pointer bg-blue-400 text-white'
                                    : 'text-center py-3 border-y flex justify-center gap-3 items-center cursor-pointer'

                        classNamePoint = isSelectedSchedule === index
                                        ? 'bg-green-400 h-3 w-3 rounded-3xl'
                                        : 'bg-green-700 h-3 w-3 rounded-3xl'
                        return (
                            <li 
                                key={index} 
                                className={classNameItem}
                                onClick={() => {changeOtherSelectSchedule(index)}}
                            >
                                <span>{name}</span>
                                <div className={classNamePoint}></div>
                            </li>
                        )
                    }) 
                    }
                </ul>
            </div>
        </section>
    )
}