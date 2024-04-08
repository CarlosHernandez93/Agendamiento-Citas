import { useState } from "react";

export const useSelectedSpecealist = () => {
    const [isSelectedSpecealist, setSelectSpecealist] = useState<string | null>(null)

    const changeOtherSelectSpecealist = (index: string | null) => {
        setSelectSpecealist(index)
    }

    return {isSelectedSpecealist, changeOtherSelectSpecealist}
}