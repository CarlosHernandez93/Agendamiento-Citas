import { specealist } from "@/api/infoDB"

export default function SelectSpecealist(){

    const nameSpecealist:string[] = Object.keys(specealist)

    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Psicologo</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="hover:overflow-y-scroll">
                    {
                    nameSpecealist.map((name, index) => {
                        return (
                            <li key={index} className="text-center py-3 border-y cursor-pointer">
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