import { PrismaClient } from "@prisma/client";
import { IDatabaseTransaction } from "./interface/IDatabaseTransaction";

export const prisma = new PrismaClient()

export const runInTransaction: IDatabaseTransaction = async (fn) => {
  return await prisma.$transaction(fn)
}