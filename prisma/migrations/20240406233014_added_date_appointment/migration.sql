/*
  Warnings:

  - Added the required column `dateAppointment` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "dateAppointment" TIMESTAMP(3) NOT NULL;
