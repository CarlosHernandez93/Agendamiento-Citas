import { specealist } from "@/api/infoDB"

export default function SelectSpecealist(){

    const nameSpecealist:string[] = Object.keys(specealist)

    return(
        <ul className="mt-12 px-8 overflow-hidden h-72">
            {
               nameSpecealist.map((name, index) => {
                return (
                    <li key={index} className="text-center py-3 border-y">
                        <span>{name}</span>
                    </li>
                )
               }) 
            }
        </ul>
    )
}