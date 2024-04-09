import {createContext } from "react";
import { useChangeMonth } from "@/hooks/useChangeMonth";
import { useSelectedSpecealist } from "@/hooks/useSelectedSpecealist";
import { useSelectedSchedule } from "@/hooks/useSelectedSchedule";
import { useSelectedDay } from "@/hooks/useSelectedDay";

export const AppointmentContext = createContext()

export function AppointmentProvider({children}:any){

    const {date, nextMonth, previousMonth} = useChangeMonth()
    const {isSelectedSpecealist, changeOtherSelectSpecealist} = useSelectedSpecealist()
    const {isSelectedSchedule, changeOtherSelectSchedule} = useSelectedSchedule()
    const {isSelectedDay, changeOtherSelectDay} = useSelectedDay()

    return(
        <AppointmentContext.Provider value={{
                date, 
                nextMonth, 
                previousMonth,
                isSelectedSchedule, 
                changeOtherSelectSpecealist, 
                isSelectedSpecealist, 
                changeOtherSelectSchedule,
                isSelectedDay, 
                changeOtherSelectDay
            }}
        >
            {children}
        </AppointmentContext.Provider>
    )
}