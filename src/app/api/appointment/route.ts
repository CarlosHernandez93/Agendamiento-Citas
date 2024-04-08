import { NextResponse } from "next/server";
import prisma from '@/libs/prisma'

export async function GET(){
    try {
        const psychologits = await prisma.appointments.findMany()
        return NextResponse.json(psychologits)
    } catch (error) {
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            )
        }
    }
}

export async function POST(request: Request){
    try {
        const {date, idPsychologist, idSchedule} = await request.json();
        const newAppointment = await prisma.appointments.create({
            data: {
                pyschologistId: idPsychologist,
                dateAppointment: date,
                availableScheduleId: idSchedule
            }
        })
        return NextResponse.json(newAppointment);
    } catch (error) {
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            )
        }
    }
}