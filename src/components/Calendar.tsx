'use client'
import {useChangeMonth} from '../hooks/useChangeMonth'
import ChangeMonthButton from './ChangeMonthButton';

export default function Calendar(){
    const {date, nextMonth, previousMonth} = useChangeMonth()

    const currentDate: Date = new Date(date.year, date.month);
    const currentNameMonth: string = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(currentDate);
    const currentYear: number = date.year;
    const currentMonth: number = date.month;
    const lastDayMonth: number = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firtsDayWeekMonth: number = new Date(currentYear, currentMonth, 1).getDay();
    const nameDayWeek: string[] = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
    let validateSelectedDate: Date

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
        <section className="">
            <div className="flex items-center justify-between mb-4">    
                <h2 className="text-center font-bold text-3xl ">
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
                        newCalendar.map((fila, indexFila) => {
                            return <tr key={indexFila} className='h-10 flex my-2 gap-2'>
                                {
                                   fila.map((dato, indexColumna) => {
                                    if(dato !== ''){
                                        validateSelectedDate = new Date(date.year,date.month,parseInt(dato))
                                        if(validateSelectedDate < new Date()){
                                            return <td 
                                                        className='text-center w-16 p-2 select-none cursor-auto rounded' 
                                                        key={indexColumna}
                                                    >
                                                        <span className='text-gray-500'>{dato}</span>  
                                                    </td>
                                        }
                                        else if(validateSelectedDate === new Date()){
                                            return <td 
                                                        className='text-center w-16 p-2 select-none cursor-pointer bg-blue-400 rounded' 
                                                        key={indexColumna}
                                                    >
                                                        <span className='bg-sky-500 text-white'>{dato}</span>
                                                    </td>
                                        }
                                        else{
                                            return <td 
                                                        className='text-center w-16 p-2 select-none cursor-pointer bg-gray-200 rounded' 
                                                        key={indexColumna}
                                                    >
                                                        <span className='text-black'>{dato}</span>
                                                    </td>
                                        }
                                    }
                                    return <td 
                                                className='text-center w-16 p-2 select-none cursor-auto' 
                                                key={indexColumna}
                                            >
                                                {dato}
                                            </td>
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