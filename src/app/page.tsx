import Calendar from "@/components/Calendar";
import SelectSchedule from "@/components/SelectedSchedule";
import SelectSpecealist from "@/components/SelectedSpecealist";

export default function Home() {
  return (
    <main className="w-full px-20">
      <section className="grid grid-cols-3 rounded-3xl py-10 shadow-2xl">
        <SelectSpecealist/>
        <Calendar/>
        <SelectSchedule/>
      </section>
    </main>
  );
}
