import Decimal from "decimal.js"
import { IPayment } from "./IPaymentsRepository"
import { IVehicle } from "./IVehiclesRepository"
import { IUser } from "./IUsersRepository"

export type RentalStatus = "reserved" | "rented" | "canceled" | "finalized" | "ended" | "no_show"


export interface IRental {
    id: string
    vehicle_id: number
    user_id: string
    check_out_date: Date
    expected_check_in_date: Date
    check_in_date: Date | null
    start_mileage: Decimal
    end_mileage: Decimal | null
    status: RentalStatus
    daily_rate: Decimal
    additional_charges: Decimal
    penalties: Decimal
    notes: string | null
    updated_at: Date
    created_at: Date
    user?: IUser
    vehicle?: IVehicle
    payments?: IPayment[]
}

export interface ICreateRental extends Pick<IRental, 'vehicle_id' | 'user_id' | 'check_out_date' | 'expected_check_in_date' | 'start_mileage' | 'daily_rate'> {
    notes?: string
}

export interface IUpdateRental extends Partial<Pick<IRental, 'check_in_date' | 'end_mileage' | 'status' | 'daily_rate' | 'additional_charges' | 'penalties' | 'notes'>> { }

export interface IRentalsRepository {
    getAll(): Promise<IRental[]>
    getById(rentalId: string): Promise<IRental | null>
    create(rentalAttributes: ICreateRental): Promise<IRental>
    update(rentalId: string, rentalAttributes: IUpdateRental): Promise<IRental | null>
    delete(rentalId: string): Promise<IRental | null>
}