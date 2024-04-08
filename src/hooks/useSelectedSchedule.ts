import { useState } from "react";

export const useSelectedSchedule = () => {
    const [isSelectedSchedule, setSelectSchedule] = useState<string | null>(null)

    const changeOtherSelectSchedule = (index: string | null) => {
        setSelectSchedule(index)
    }

    return {isSelectedSchedule, changeOtherSelectSchedule}
}