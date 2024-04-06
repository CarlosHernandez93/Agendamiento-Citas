import { useState } from "react";

export const useSelectedSpecealist = () => {
    const [isSelectedSpecealist, setSelectSpecealist] = useState<number | null>(null)

    const changeOtherSelectSpecealist = (index: number | null) => {
        setSelectSpecealist(index)
    }

    return {isSelectedSpecealist, changeOtherSelectSpecealist}
}