import Calendar from "@/components/Calendar";
import SelectSchedule from "@/components/SelectedSchedule";
import SelectSpecealist from "@/components/SelectedSpecealist";

export default function Home() {
  return (
    <main className="w-[80%] grid grid-cols-3 rounded-3xl shadow-2xl bg-white h-[70%]">
        <SelectSpecealist/>
        <Calendar/>
        <SelectSchedule/>
    </main>
  );
}
