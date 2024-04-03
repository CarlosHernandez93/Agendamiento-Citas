'use client'
import {useChangeMonth} from '../hooks/useChangeMonth'
import ChangeMonthButton from './ChangeMonthButton';
import { useSelectedDay } from '@/hooks/useSelectedDay';

export default function Calendar(){
    const {date, nextMonth, previousMonth} = useChangeMonth()
    const {isSelectedDay, changeOtherSelectDay} = useSelectedDay()

    const currentDate: Date = new Date(date.year, date.month);
    const currentNameMonth: string = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(currentDate);
    const currentYear: number = date.year;
    const currentMonth: number = date.month;
    const lastDayMonth: number = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firtsDayWeekMonth: number = new Date(currentYear, currentMonth, 1).getDay();
    const nameDayWeek: string[] = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
    let validateSelectedDate: Date
    const validateCurrentDate: Date = new Date()
    let selectDay: boolean
    let selectDayStyles: string

    // Creacion de la plantilla para el calendario
    const calendarTemplate:string[][] = [["","","","","","",""],
                                        ["","","","","","",""],
                                        ["","","","","","",""],
                                        ["","","","","","",""],
                                        ["","","","","","",""],
                                        ["","","","","","",""]]

    let contDays = 0
    let contDaysCalendar = 0
    
    const newCalendar: string[][] = calendarTemplate.map((week) => {
        week = week.map((day) => {
                contDaysCalendar++;
                if(contDaysCalendar > firtsDayWeekMonth && contDays < lastDayMonth){
                    contDays++
                    day = contDays.toString()
                }
                else{
                    day=""
                }
                return day;
            })

            return week
    })


    return(
        <section className='py-4'>
            <div className="flex items-center justify-between mb-4">    
                <h2 className="text-center font-bold text-3xl cursor-auto select-none">
                    {currentNameMonth + " "}
                    <span className="text-gray-500">{currentYear}</span>
                </h2>
                <div className="flex items-center gap-3">
                    {   /*
                        <ChangeMonthButton nameAction='prev' action={previousMonth({month: date.month, year: date.year})}></ChangeMonthButton>
                        <ChangeMonthButton nameAction='next' action={nextMonth({month: date.month, year: date.year})}></ChangeMonthButton>
                        */
                    }
                    <button 
                        onClick={() => {previousMonth({month: date.month, year: date.year})}}
                        className='text-center'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="24" 
                            viewBox="0 -960 960 960" 
                            width="24"
                        >
                            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                        </svg>  
                    </button>
                    <button 
                        onClick={() => {nextMonth({month: date.month, year: date.year})}}
                        className='text-center'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="24" 
                            viewBox="0 -960 960 960" 
                            width="24"
                        >
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <table className='flex flex-col'>
                <thead>
                    <tr className='flex'>
                        {
                            nameDayWeek.map((element, index) => {
                                return <th key={index} className="w-16 p-2 cursor-auto select-none">
                                            {element}
                                        </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        newCalendar.map((week, rowIndex) => {
                            return <tr key={rowIndex} className='h-10 flex my-2 gap-2'>
                                {
                                   week.map((day, columnIndex) => {

                                    if(day !== ''){
                                        validateSelectedDate = new Date(date.year,date.month,parseInt(day))
                                        selectDay = isSelectedDay.selectedRow === rowIndex && isSelectedDay.selectedColumn === columnIndex
                                        selectDayStyles = selectDay ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'

                                        if(
                                            (validateSelectedDate.getDate() === validateCurrentDate.getDate()) && 
                                            (validateSelectedDate.getMonth() === validateCurrentDate.getMonth()) && 
                                            (validateSelectedDate.getFullYear() === validateCurrentDate.getFullYear())
                                        ){
                                            return (
                                                <td 
                                                    className={`text-center w-16 p-2 select-none cursor-pointer rounded ${selectDayStyles}`} 
                                                    key={columnIndex}
                                                    onClick={() => {
                                                        changeOtherSelectDay(rowIndex, columnIndex)
                                                    }}
                                                >
                                                    <span>{day}</span>
                                                </td>
                                            )
                                        }
                                        else if(validateSelectedDate < validateCurrentDate){
                                            return (
                                                <td 
                                                    className='text-center w-16 p-2 select-none cursor-auto rounded' 
                                                    key={columnIndex}
                                                >
                                                    <span className='text-gray-500'>{day}</span>  
                                                </td>
                                            )
                                        }
                                        else{
                                            return (
                                                <td 
                                                    className={`text-center w-16 p-2 select-none cursor-pointer rounded ${selectDayStyles}`}
                                                    key={columnIndex}
                                                    onClick={() => {
                                                        changeOtherSelectDay(rowIndex, columnIndex)
                                                    }}
                                                >
                                                    <span>{day}</span>
                                                </td>
                                            )
                                        }
                                    }
                                    return (
                                        <td 
                                            className='w-16 p-2 select-none cursor-auto' 
                                            key={columnIndex}
                                        >
                                            {''}
                                        </td>
                                    )
                                   }) 
                                }
                            </tr>
                        })
                    }
                </tbody> 
            </table>
        </section>
    )
}