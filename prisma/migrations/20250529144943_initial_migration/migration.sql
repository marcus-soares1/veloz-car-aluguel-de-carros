-- CreateEnum
CREATE TYPE "Role" AS ENUM ('client', 'attendant', 'admin');

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('avaliable', 'rented', 'under_maintenance');

-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('reserved', 'rented', 'canceled', 'finalized', 'ended', 'no_show');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'pending');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('pix', 'credit', 'debit');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('prepayment', 'final', 'security_deposit', 'adjust');

-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('FIAT', 'VOLKSWAGEN', 'CHEVROLET', 'FORD', 'RENAULT', 'HYUNDAI', 'TOYOTA', 'HONDA', 'NISSAN', 'PEUGEOT', 'CITROEN', 'KIA', 'MITSUBISHI', 'JEEP', 'BMW', 'MERCEDES_BENZ', 'AUDI', 'VOLVO', 'CHERY', 'BYD', 'TESLA', 'LAND_ROVER', 'PORSCHE', 'FERRARI', 'LAMBORGHINI', 'ALFA_ROMEO', 'JAGUAR', 'RAM', 'GWM', 'JAC', 'TROLLER');

-- CreateEnum
CREATE TYPE "Model" AS ENUM ('MARGO', 'MCRONOS', 'MMOBI', 'MPULSE', 'MFASTBACK', 'MSTRADA', 'MTORO', 'MUNO', 'MPALIO', 'MSIENA', 'M147', 'M147_PICKUP', 'MPUNTO', 'MONIX', 'MTRACKER', 'MSPIN', 'MPRISMA', 'MCOBALT', 'MCRUZE', 'MJOYC', 'MONTANA', 'MZAFIRA', 'MBLAZER', 'MKA', 'MKA_PLUS', 'MFIESTA', 'MFIESTA_SEDAN', 'MECOSPORT', 'MFUSION', 'MFOCUS', 'MRANGER', 'MESCAPE', 'MGOL', 'MSAVEIRO', 'MVOYAGE', 'MFOX', 'MPCROSS', 'MUP', 'MJETTA', 'MGOLF', 'MPASSAT', 'MAMAROK', 'MTIGUAN', 'M207', 'M208', 'M2008', 'M3008', 'M5008', 'MPARTNER', 'MEXPERT', 'MLOGAN', 'MSANDERO', 'MSTEPWAY', 'MDUSTER', 'MKWID', 'MCAPTUR', 'MFLUENCE', 'MSYMBOL', 'MHB20', 'MHB20S', 'MHB20X', 'MCRETA', 'MTUCSON', 'MSANT');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255),
    "role" "Role" NOT NULL DEFAULT 'client',
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "brand" "Brand" NOT NULL,
    "model" "Model" NOT NULL,
    "category_id" INTEGER NOT NULL,
    "manufacture_year" TIMESTAMP(3) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "diary_value" DECIMAL(65,30) NOT NULL,
    "status" "VehicleStatus" NOT NULL,
    "kilometers" DECIMAL(65,30) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "payment_date" TIMESTAMP(3),
    "refund_date" TIMESTAMP(3),
    "method_type" "PaymentMethod" NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "payment_type" "PaymentType" NOT NULL,
    "proof_of_payment_url" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentals" (
    "id" UUID NOT NULL,
    "vehicle_id" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "check_in_date" TIMESTAMP(3) NOT NULL,
    "check_out_date" TIMESTAMP(3),
    "start_mileage" DECIMAL(65,30) NOT NULL,
    "end_mileage" DECIMAL(65,30),
    "status" "RentalStatus" NOT NULL,
    "daily_rate" DECIMAL(65,30) NOT NULL,
    "additional_charges" DECIMAL(65,30),
    "penalties" DECIMAL(65,30),
    "notes" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
