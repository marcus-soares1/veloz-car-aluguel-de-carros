import Decimal from "decimal.js"

export const convertToDecimal = (number: number) => {
   return new Decimal(number)
}