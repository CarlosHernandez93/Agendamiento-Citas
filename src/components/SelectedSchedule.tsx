import { loadSchedules } from "@/logic/loadSchedules"
import ListSchedules from "./ListSchedules"  


export default async function SelectSchedule(){

    const listSchedules = await loadSchedules()
  
    return(
        <section className="px-8 py-4 overflow-hidden flex flex-col justify-between">
            <h2 className="p-1 font-bold text-center text-2xl cursor-auto select-none">Horarios</h2>
            <div className="h-4/5 overflow-hidden">
                <ul className="h-full overflow-y-scroll scroll-smooth">
                    <ListSchedules listSchedules={listSchedules}/>
                </ul>
            </div>
        </section>
    )
}