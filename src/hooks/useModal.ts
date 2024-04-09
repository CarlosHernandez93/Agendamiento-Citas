import { useState} from "react";

export const useModal = () => {
    const [open, setOpen] = useState<boolean>(false)

    const onOpenModal = (state: boolean) => {
        setOpen(!state)
    }

    return {open, onOpenModal}
}