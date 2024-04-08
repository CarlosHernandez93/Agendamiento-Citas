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