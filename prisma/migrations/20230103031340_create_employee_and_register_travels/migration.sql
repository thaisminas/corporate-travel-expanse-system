-- CreateTable
CREATE TABLE "Employee" (
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

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisterQuotation" (
    "id" SERIAL NOT NULL,
    "travel_registrationId" INTEGER NOT NULL,
    "carRental" DOUBLE PRECISION NOT NULL,
    "airfare" DOUBLE PRECISION NOT NULL,
    "hotel" DOUBLE PRECISION NOT NULL,
    "bus_transport" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegisterQuotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelRegistration" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "departure_date" TIMESTAMP(3) NOT NULL,
    "arrival_date" TIMESTAMP(3) NOT NULL,
    "oneWay" TEXT NOT NULL,
    "inbound" TEXT NOT NULL,
    "return_route" TEXT NOT NULL,
    "destination_city" TEXT NOT NULL,
    "departure_city" TEXT NOT NULL,
    "advance_amount" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TravelRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelArrangement" (
    "id" SERIAL NOT NULL,
    "travel_registrationId" INTEGER NOT NULL,
    "other_expenses" TIMESTAMP(3) NOT NULL,
    "food_expenses" DOUBLE PRECISION NOT NULL,
    "total_expenses" DOUBLE PRECISION NOT NULL,
    "value_to_refund" DOUBLE PRECISION NOT NULL,
    "refund_amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TravelArrangement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Employee_id_idx" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RegisterQuotation_travel_registrationId_key" ON "RegisterQuotation"("travel_registrationId");

-- CreateIndex
CREATE INDEX "RegisterQuotation_id_idx" ON "RegisterQuotation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TravelRegistration_employee_id_key" ON "TravelRegistration"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "TravelRegistration_oneWay_key" ON "TravelRegistration"("oneWay");

-- CreateIndex
CREATE INDEX "TravelRegistration_id_idx" ON "TravelRegistration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TravelArrangement_travel_registrationId_key" ON "TravelArrangement"("travel_registrationId");

-- CreateIndex
CREATE INDEX "TravelArrangement_id_idx" ON "TravelArrangement"("id");

-- AddForeignKey
ALTER TABLE "RegisterQuotation" ADD CONSTRAINT "RegisterQuotation_travel_registrationId_fkey" FOREIGN KEY ("travel_registrationId") REFERENCES "TravelRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelRegistration" ADD CONSTRAINT "TravelRegistration_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelArrangement" ADD CONSTRAINT "TravelArrangement_travel_registrationId_fkey" FOREIGN KEY ("travel_registrationId") REFERENCES "TravelRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
