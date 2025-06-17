-- CreateEnum
CREATE TYPE "Role" AS ENUM ('client', 'attendant', 'admin');

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('avaliable', 'rented', 'under_maintenance', 'reserved');

-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('reserved', 'rented', 'canceled', 'finalized', 'ended', 'no_show');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'pending', 'refunded', 'partialy_refunded', 'canceled');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('pix', 'credit', 'debit');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('prepayment', 'final', 'security_deposit', 'adjust');

-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('FIAT', 'VOLKSWAGEN', 'CHEVROLET', 'FORD', 'RENAULT', 'HYUNDAI', 'TOYOTA', 'HONDA', 'NISSAN', 'PEUGEOT', 'CITROEN', 'KIA', 'MITSUBISHI', 'JEEP', 'BMW', 'MERCEDES_BENZ', 'AUDI', 'VOLVO', 'CHERY', 'BYD', 'TESLA', 'LAND_ROVER', 'PORSCHE', 'FERRARI', 'LAMBORGHINI', 'ALFA_ROMEO', 'JAGUAR', 'RAM', 'GWM', 'JAC', 'TROLLER');

-- CreateEnum
CREATE TYPE "Model" AS ENUM ('ARGO', 'CRONOS', 'MOBI', 'PULSE', 'FASTBACK', 'STRADA', 'TORO', 'UNO', 'PALIO', 'SIENA', 'M147', 'M147_PICKUP', 'PUNTO', 'ONIX', 'TRACKER', 'SPIN', 'PRISMA', 'COBALT', 'CRUZE', 'JOY', 'MONTANA', 'ZAFIRA', 'BLAZER', 'KA', 'KA_PLUS', 'FIESTA', 'FIESTA_SEDAN', 'ECOSPORT', 'FUSION', 'FOCUS', 'RANGER', 'ESCAPE', 'GOL', 'SAVEIRO', 'VOYAGE', 'FOX', 'PCROSS', 'UP', 'JETTA', 'GOLF', 'PASSAT', 'AMAROK', 'TIGUAN', 'M207', 'M208', 'M2008', 'M3008', 'M5008', 'PARTNER', 'EXPERT', 'LOGAN', 'SANDERO', 'STEPWAY', 'DUSTER', 'KWID', 'CAPTUR', 'FLUENCE', 'SYMBOL', 'HB20', 'HB20S', 'HB20X', 'CRETA', 'TUCSON', 'SANT');

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
    "license_plate" VARCHAR(7) NOT NULL,
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
    "id" UUID NOT NULL,
    "rental_id" UUID NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "payment_date" TIMESTAMP(3),
    "refund_amount" DECIMAL(65,30),
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
    "check_out_date" TIMESTAMP(3) NOT NULL,
    "expected_check_in_date" TIMESTAMP(3) NOT NULL,
    "check_in_date" TIMESTAMP(3),
    "start_mileage" DECIMAL(65,30) NOT NULL,
    "end_mileage" DECIMAL(65,30),
    "status" "RentalStatus" NOT NULL DEFAULT 'reserved',
    "daily_rate" DECIMAL(65,30) NOT NULL,
    "additional_charges" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "penalties" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "notes" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_license_plate_key" ON "vehicles"("license_plate");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_rental_id_fkey" FOREIGN KEY ("rental_id") REFERENCES "rentals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
