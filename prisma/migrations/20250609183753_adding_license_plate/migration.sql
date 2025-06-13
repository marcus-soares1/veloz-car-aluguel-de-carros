/*
  Warnings:

  - Added the required column `license_plate` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PaymentStatus" ADD VALUE 'refunded';
ALTER TYPE "PaymentStatus" ADD VALUE 'partialy_refunded';

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "license_plate" VARCHAR(7) NOT NULL;
