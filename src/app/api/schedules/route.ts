import { NextResponse } from "next/server";
import prisma from '@/libs/prisma'

export async function GET(){
    const psychologits = await prisma.availableSchedules.findMany()
    return NextResponse.json(psychologits)
}