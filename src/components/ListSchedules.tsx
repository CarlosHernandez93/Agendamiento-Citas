'use client'
import { useSelectedSchedule } from "@/hooks/useSelectedSchedule"
import { useChangeMonth } from "@/hooks/useChangeMonth"
import { useEffect } from "react"

type TypeJson = {
    id: string,
    schedule: string
}

type TypeList = {
    listSchedules: TypeJson[]
}

export default function ListSchedules(listSchedules:TypeList){
    const {isSelectedSchedule, changeOtherSelectSchedule} = useSelectedSchedule()
    const {date } = useChangeMonth()

    let classNameItem: string
    let classNamePoint: string
    const list:TypeJson[] = listSchedules.listSchedules

    useEffect(()=>{
        console.log(`Cambio date -> ${date.month}`)
    },[date])

    return(
        <>
            {
                
                list.map((schedule:TypeJson) => {
                    classNameItem = isSelectedSchedule === schedule.id
                                ? 'text-center py-3 border-y flex justify-center gap-3 items-center cursor-pointer bg-blue-400 text-white'
                                : 'text-center py-3 border-y flex justify-center gap-3 items-center cursor-pointer'

                    classNamePoint = isSelectedSchedule === schedule.id
                                    ? 'bg-green-400 h-3 w-3 rounded-3xl'
                                    : 'bg-green-700 h-3 w-3 rounded-3xl'
                    return (
                        <li 
                            key={schedule.id} 
                            className={classNameItem}
                            onClick={() => {
                                changeOtherSelectSchedule(schedule.id)
                            }}
                        >
                            <span>{schedule.schedule}</span>
                            <div className={classNamePoint}></div>
                        </li>
                    )
                }) 
            }
        </>
    )
}