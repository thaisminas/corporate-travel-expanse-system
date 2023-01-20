/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the services it contains will be lost.
  - You are about to drop the `RegisterQuotation` table. If the table is not empty, all the services it contains will be lost.
  - You are about to drop the `TravelArrangement` table. If the table is not empty, all the services it contains will be lost.
  - You are about to drop the `TravelRegistration` table. If the table is not empty, all the services it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RegisterQuotation" DROP CONSTRAINT "RegisterQuotation_travel_registrationId_fkey";

-- DropForeignKey
ALTER TABLE "TravelArrangement" DROP CONSTRAINT "TravelArrangement_travel_registrationId_fkey";

-- DropForeignKey
ALTER TABLE "TravelRegistration" DROP CONSTRAINT "TravelRegistration_employee_id_fkey";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "RegisterQuotation";

-- DropTable
DROP TABLE "TravelArrangement";

-- DropTable
DROP TABLE "TravelRegistration";

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "manager_name" TEXT NOT NULL,
    "agency" INTEGER NOT NULL,
    "account" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_quotations" (
    "id" SERIAL NOT NULL,
    "travel_registrationId" INTEGER NOT NULL,
    "carRental" DOUBLE PRECISION NOT NULL,
    "airfare" DOUBLE PRECISION NOT NULL,
    "hotel" DOUBLE PRECISION NOT NULL,
    "bus_transport" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "register_quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_registrations" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "travel_arrangementId" INTEGER NOT NULL,
    "travel_registrationId" INTEGER NOT NULL,
    "departure_date" TIMESTAMP(3) NOT NULL,
    "arrival_date" TIMESTAMP(3) NOT NULL,
    "oneWay" TEXT NOT NULL,
    "inbound" TEXT NOT NULL,
    "return_route" TEXT NOT NULL,
    "destination_city" TEXT NOT NULL,
    "departure_city" TEXT NOT NULL,
    "advance_amount" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "travel_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_arrangements" (
    "id" SERIAL NOT NULL,
    "travel_registrationId" INTEGER NOT NULL,
    "other_expenses" TIMESTAMP(3) NOT NULL,
    "food_expenses" DOUBLE PRECISION NOT NULL,
    "total_expenses" DOUBLE PRECISION NOT NULL,
    "value_to_refund" DOUBLE PRECISION NOT NULL,
    "refund_amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "travel_arrangements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "employee_id_idx" ON "employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "register_quotations_travel_registrationId_key" ON "register_quotations"("travel_registrationId");

-- CreateIndex
CREATE INDEX "register_quotations_id_idx" ON "register_quotations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "travel_registrations_employee_id_key" ON "travel_registrations"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "travel_registrations_travel_arrangementId_key" ON "travel_registrations"("travel_arrangementId");

-- CreateIndex
CREATE UNIQUE INDEX "travel_registrations_travel_registrationId_key" ON "travel_registrations"("travel_registrationId");

-- CreateIndex
CREATE UNIQUE INDEX "travel_registrations_oneWay_key" ON "travel_registrations"("oneWay");

-- CreateIndex
CREATE INDEX "travel_registrations_id_idx" ON "travel_registrations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "travel_arrangements_travel_registrationId_key" ON "travel_arrangements"("travel_registrationId");

-- CreateIndex
CREATE INDEX "travel_arrangements_id_idx" ON "travel_arrangements"("id");

-- AddForeignKey
ALTER TABLE "travel_registrations" ADD CONSTRAINT "travel_registrations_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_registrations" ADD CONSTRAINT "travel_registrations_travel_arrangementId_fkey" FOREIGN KEY ("travel_arrangementId") REFERENCES "travel_arrangements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_registrations" ADD CONSTRAINT "travel_registrations_travel_registrationId_fkey" FOREIGN KEY ("travel_registrationId") REFERENCES "register_quotations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
