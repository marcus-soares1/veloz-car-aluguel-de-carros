import { HttpError } from "../errors/HttpError";
import { ICreateVehicle, IUpdateVehicle, IVehicle, IVehiclesRepository, VehicleStatus } from "../repositories/interfaces/IVehiclesRepository";

export class VehicleService {
    constructor(private readonly vehiclesRepository: IVehiclesRepository) { }

    async getAvaliableVehicles(): Promise<IVehicle[]> {
        return this.vehiclesRepository.getAll({ status: 'avaliable'})
    }

    async getAllVehicles(): Promise<IVehicle[]> {
        return this.vehiclesRepository.getAll();
    }

    async getVehicleById(id: number): Promise<IVehicle | null> {
        return this.vehiclesRepository.getById(id);
    }

    async sendToMaintence (id: number): Promise<IVehicle> {
        const vehicle = await this.updateVehicle(id, {status: 'under_maintenance'})
        return vehicle
    }

    async changeVehicleStatus (id: number, status: VehicleStatus): Promise<IVehicle>{
        const updatedVehicle = await this.vehiclesRepository.update(id, {status})
        if(!updatedVehicle) throw new HttpError('Vehicle not found', 404)
        
        return updatedVehicle
    }

    async checkVehicleStatus(id: number): Promise<VehicleStatus> {
        const vehicle = await this.vehiclesRepository.getById(id)
        if(!vehicle) throw new HttpError('Vehicle not found', 404)

        return vehicle.status
    }

    async createVehicle(vehicleAttributes: ICreateVehicle) {
        return this.vehiclesRepository.create(vehicleAttributes);
    }

    async updateVehicle(id: number, vehicleAttributes: IUpdateVehicle): Promise<IVehicle> {
        const updatedVehicle = await this.vehiclesRepository.update(id, vehicleAttributes)
        if(!updatedVehicle) throw new HttpError('Vehicle not found', 404)
        return updatedVehicle
    }

    async deleteVehicle(id: number): Promise<IVehicle> {
        const deletedVehicle = await this.vehiclesRepository.delete(id)
        if(!deletedVehicle) throw new HttpError('Vehicle not found', 404)
        return deletedVehicle
    }
}