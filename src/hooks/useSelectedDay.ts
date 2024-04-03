import { useState, useEffect } from "react";

type MatrizState = {
    selectedRow: number | null,
    selectedColumn: number | null
}

export const useSelectedDay = () => {
    const [isSelectedDay, setSelectDay] = useState<MatrizState>({selectedRow: null, selectedColumn: null})

    const changeOtherSelectDay = (rowIndex: number, columnIndex: number) => {
        setSelectDay({selectedRow: rowIndex, selectedColumn: columnIndex})
    }

    return {isSelectedDay, changeOtherSelectDay}
}