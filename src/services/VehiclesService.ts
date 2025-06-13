import { HttpError } from "../errors/HttpError";
import { ICreateVehicle, IUpdateVehicle, IVehicle, IVehiclesRepository, IVehiclesWhere, VehicleStatus } from "../repositories/interfaces/IVehiclesRepository";

export class VehicleService {
    constructor(private readonly vehiclesRepository: IVehiclesRepository) { }

    async getAvaliableVehicles(tx?: unknown): Promise<IVehicle[]> {
        return this.vehiclesRepository.getAll({ status: 'avaliable'}, tx)
    }

    async getAllVehicles(where: IVehiclesWhere, tx?: unknown): Promise<IVehicle[]> {
        return this.vehiclesRepository.getAll(where, tx);
    }

    async getVehicleById(id: number, tx?: unknown): Promise<IVehicle | null> {
        return this.vehiclesRepository.getById(id, tx);
    }

    async sendToMaintence (id: number, tx?: unknown): Promise<IVehicle> {
        const vehicle = await this.updateVehicle(id, {status: 'under_maintenance'}, tx)
        return vehicle
    }

    async changeVehicleStatus (id: number, status: VehicleStatus, tx?: unknown): Promise<IVehicle>{
        const updatedVehicle = await this.vehiclesRepository.update(id, {status}, tx)
        if(!updatedVehicle) throw new HttpError('Vehicle not found', 404)
        
        return updatedVehicle
    }

    async checkVehicleStatus(id: number, tx?: unknown): Promise<VehicleStatus> {
        const vehicle = await this.vehiclesRepository.getById(id, tx)
        if(!vehicle) throw new HttpError('Vehicle not found', 404)

        return vehicle.status
    }

    async createVehicle(vehicleAttributes: ICreateVehicle, tx?: unknown) {
        return this.vehiclesRepository.create(vehicleAttributes, tx);
    }

    async updateVehicle(id: number, vehicleAttributes: IUpdateVehicle, tx?: unknown): Promise<IVehicle> {
        const updatedVehicle = await this.vehiclesRepository.update(id, vehicleAttributes, tx)
        if(!updatedVehicle) throw new HttpError('Vehicle not found', 404)
        return updatedVehicle
    }

    async deleteVehicle(id: number, tx?: unknown): Promise<IVehicle> {
        const deletedVehicle = await this.vehiclesRepository.delete(id, tx)
        if(!deletedVehicle) throw new HttpError('Vehicle not found', 404)
        return deletedVehicle
    }
}