'use client'
import Calendar from "@/components/Calendar";
import CoustumModal from "@/components/Modal";
import SelectSchedule from "@/components/SelectedSchedule";
import SelectSpecealist from "@/components/SelectedSpecealist";
import { AppointmentProvider } from "@/context/appointment";

export default function Home() {
  return (
    <>
      <AppointmentProvider>
        <main className="w-[80%] grid grid-cols-3 rounded-3xl shadow-2xl bg-white h-[70%]">
            <SelectSpecealist/>
            <Calendar/>
            <SelectSchedule/>
        </main>
        <CoustumModal/>
      </AppointmentProvider>
    </>
  );
}
