import Decimal from "decimal.js"
import { IPayment } from "./IPaymentsRepository"
import { IVehicle } from "./IVehiclesRepository"
import { IUser } from "./IUsersRepository"

export enum RentalStatus {
    reserved = "reserved",
    rented = "rented",
    canceled = "canceled",
    finalized = "finalized",
    ended = "ended",
    no_show = "no show"
}


export interface IRental {
    id: string
    vehicle_id: number
    user_id: string
    check_in_date: Date
    check_out_date?: Date
    start_mileage: number
    end_mileage?: number
    status: RentalStatus
    daily_rate: Decimal
    additional_charges?: Decimal
    penalties?: Decimal
    notes?: string
    updated_at: Date
    created_at: Date
    user: IUser
    vehicle: IVehicle
    payments: IPayment[]
}

export interface ICreateRental {
    vehicle_id: number
    user_id: string
    check_in_date: Date
    check_out_date?: Date
    start_mileage: number
    end_mileage?: number
    status: RentalStatus
    daily_rate: Decimal
    additional_charges?: Decimal
    penalties?: Decimal
    notes?: string
}

export interface IRentalRepository {
    getAll(): Promise<IRental[]>
    getById(categoryId: string): Promise<IRental | null>
    create(categoryAttributes: ICreateRental): Promise<IRental>
    update(categoryId: string, categoryAttributes: Partial<ICreateRental>): Promise<IRental | null>
    delete(categoryId: string): Promise<IRental | null>
}