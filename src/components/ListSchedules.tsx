import { useSelectedSchedule } from "@/hooks/useSelectedSchedule"
import { useChangeMonth } from "@/hooks/useChangeMonth"
import { useContext } from "react"
import { AppointmentContext } from "@/context/appointment"

type TypeJson = {
    id: string,
    schedule: string
}

type TypeList = {
    listSchedules: TypeJson[]
}

export default function ListSchedules(listSchedules:TypeList){
    const {isSelectedSchedule, changeOtherSelectSchedule} = useSelectedSchedule()
    const appointmentContext = useContext(AppointmentContext)
    let classNameItem: string
    let classNamePoint: string
    const list:TypeJson[] = listSchedules.listSchedules

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
                                console.log(appointmentContext)
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