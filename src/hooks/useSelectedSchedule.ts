import { useState } from "react";

export const useSelectedSchedule = () => {
    const [isSelectedSchedule, setSelectSchedule] = useState<number | null>(null)

    const changeOtherSelectSchedule = (index: number | null) => {
        setSelectSchedule(index)
    }

    return {isSelectedSchedule, changeOtherSelectSchedule}
}