import { useSelectedSpecealist } from "@/hooks/useSelectedSpecealist"
import { useContext } from "react"
import { AppointmentContext } from "@/context/appointment"

type TypeJson = {
    id: string,
    name: string
}

type TypeList = {
    listPsychologist: TypeJson[]
}

export default function ListPsychologist(listPsychologist:TypeList){
    const {isSelectedSpecealist, changeOtherSelectSpecealist} = useContext(AppointmentContext)
    let className: string
    const list: TypeJson[]= listPsychologist.listPsychologist
    return (
        <>
        {
            list.map((psychologist:TypeJson) => {
                className = isSelectedSpecealist === psychologist.id 
                            ? 'text-center py-3 border-y cursor-pointer bg-blue-400 text-white'
                            : 'text-center py-3 border-y cursor-pointer'
                return (
                    <li 
                        key={psychologist.id} 
                        className={className}
                        onClick={() => {
                            console.log(psychologist.id)
                            changeOtherSelectSpecealist(psychologist.id)
                        }}
                    >
                        <span>{psychologist.name}</span>
                    </li>
                )
            })
        }
        </>
    )
}