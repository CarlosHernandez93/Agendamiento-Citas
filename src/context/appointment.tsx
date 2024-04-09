import {createContext } from "react";
import { useChangeMonth } from "@/hooks/useChangeMonth";
import { useSelectedSpecealist } from "@/hooks/useSelectedSpecealist";
import { useSelectedSchedule } from "@/hooks/useSelectedSchedule";

type DateType = {
    month: number,
    year: number
}

type AppointmentContextType = {
    date: DateType,
    isSelectedSpecealist: string | null,
    isSelectedSchedule: string |null
}

export const AppointmentContext = createContext<AppointmentContextType | null>(null)

export function AppointmentProvider({children}:any){

    const {date} = useChangeMonth()
    const {isSelectedSpecealist} = useSelectedSpecealist()
    const {isSelectedSchedule} = useSelectedSchedule()

    return(
        <AppointmentContext.Provider value={{date, isSelectedSchedule, isSelectedSpecealist}}>
            {children}
        </AppointmentContext.Provider>
    )
}