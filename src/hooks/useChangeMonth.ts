import { useState} from "react";

type DateType = {
    month: number,
    year: number
}

export const useChangeMonth = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const [date, newDate] = useState<DateType>({month: currentMonth, year: currentYear})

    const nextMonth = (date: DateType) => {
        if(date.month === 11){
            date.month = 0
            date.year += 1
        }
        else{
            date.month += 1
        }
        newDate({month: date.month, year: date.year})
    }

    const previousMonth = (date: DateType) => {
        if(date.month === 0){
            date.month = 11
            date.year -= 1
        }
        else{
            date.month -= 1
        }
        newDate({month: date.month, year: date.year})
    }

    return{date, nextMonth, previousMonth}
}