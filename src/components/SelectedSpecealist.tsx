import { loadPsychologist } from "@/logic/loadPsychologist"
import ListPsychologist from "./ListPsychologist"

export default async function SelectSpecealist(){
    const listPsychologist = await loadPsychologist()
    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Psicologo</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="h-full overflow-y-scroll scroll-smooth">
                    <ListPsychologist listPsychologist={listPsychologist}/>
                </ul>
            </div>
        </section>
    )
}