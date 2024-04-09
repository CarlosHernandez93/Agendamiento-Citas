import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useContext } from "react"
import { AppointmentContext } from "@/context/appointment"

export default function CoustumModal(){
    const {open, onOpenModal}= useContext(AppointmentContext)
    return(
        <Modal open={open} onClose={onOpenModal} center>
            <h2 className='text-xl font-bold mb-2'>Confirmacion</h2>
            <p className='mb-3'>¿Estas seguro de agendar la cita?</p>
            <div className='flex justify-center'>
                <button className='bg-blue-400 text-white font-bold p-1 rounded'>Aceptar</button>
            </div>
        </Modal>
    )
}