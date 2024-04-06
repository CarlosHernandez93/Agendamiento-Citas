'use client'
import { specealist } from "@/api/infoDB"
import { useSelectedSpecealist } from "@/hooks/useSelectedSpecealist"

export default function SelectSpecealist(){

    const nameSpecealist:string[] = Object.keys(specealist)
    const {isSelectedSpecealist,changeOtherSelectSpecealist} = useSelectedSpecealist()
    let className: string

    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Psicologo</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="h-full hover:overflow-y-scroll hover:scroll-smooth">
                    {
                    nameSpecealist.map((name, index) => {
                        className = isSelectedSpecealist === index 
                                    ? 'text-center py-3 border-y cursor-pointer bg-blue-400 text-white'
                                    : 'text-center py-3 border-y cursor-pointer'
                        return (
                            <li 
                                key={index} 
                                className={className}
                                onClick={() => {changeOtherSelectSpecealist(index)}}
                            >
                                <span>{name}</span>
                            </li>
                        )
                    }) 
                    }
                </ul>
            </div>
        </section>
    )
}