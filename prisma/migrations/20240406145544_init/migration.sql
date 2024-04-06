-- CreateTable
CREATE TABLE "Pyschologist" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pyschologist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableSchedules" (
    "id" SERIAL NOT NULL,
    "schedule" TEXT NOT NULL,

    CONSTRAINT "AvailableSchedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "pyschologistId" INTEGER NOT NULL,
    "availableScheduleId" INTEGER NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_pyschologistId_fkey" FOREIGN KEY ("pyschologistId") REFERENCES "Pyschologist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_availableScheduleId_fkey" FOREIGN KEY ("availableScheduleId") REFERENCES "AvailableSchedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
