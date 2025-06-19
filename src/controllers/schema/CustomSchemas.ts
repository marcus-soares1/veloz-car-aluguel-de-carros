import Decimal from "decimal.js";
import { z } from "zod";

export const DecimalSchema = z
  .union([z.string(), z.number()])
  .refine((val) => {
    try {
      new Decimal(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: "Valor inválido para Decimal",
  })
  .transform((val) => new Decimal(val));