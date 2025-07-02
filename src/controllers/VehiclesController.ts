import { Handler } from "express"
import { VehiclesService } from "../services/VehiclesService"
import { QueryIdNumberRequestSchema, QueryIdNumberWithStatusSchema } from "./schema/QueriesRequestSchema"
import { CreateVehicleRequestSchemas, UpdateVehicleRequestSchemas } from "./schema/VehicleRequestSchema"

export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}
    
    // GET /vehicles
    index: Handler = async (req, res, next) => {
        try {
            const vehicles = await this.vehiclesService.getAllVehicles();
            res.json(vehicles);
        } catch (error) {
            next(error);
        }
    }

    // GET /vehicles/avaliable
    getAvaliable: Handler = async (req, res, next) => {
        try {
            const vehicles = await this.vehiclesService.getAvaliableVehicles();
            res.json(vehicles);
        } catch (error) {
            next(error);
        }
    }

    // GET /vehicles/:id
    show: Handler = async (req, res, next) => {
        try {
            const { id } = QueryIdNumberRequestSchema.parse(req.params);
            const vehicle = await this.vehiclesService.getVehicleById(id)
            res.json(vehicle);
        } catch (error) {
            next(error);
        }
    }

    // GET /vehicles/:id/status
    getStatus: Handler = async (req, res, next) => {
        try {
            const { id } = QueryIdNumberRequestSchema.parse(req.params);
            const status = await this.vehiclesService.checkVehicleStatus(id);
            res.json({ status });
        } catch (error) {
            next(error);
        }
    }

    // POST /vehicles
    create: Handler = async (req, res, next) => {
        try {
            const vehicleAttributes = CreateVehicleRequestSchemas.parse(req.body);
            const createdVehicle = await this.vehiclesService.createVehicle(vehicleAttributes);
            res.status(201).json(createdVehicle);
        } catch (error) {
            next(error);
        }
    }

    // PUT /vehicles/:id
    update: Handler = async (req, res, next) => {
        try {
            const { id } = QueryIdNumberRequestSchema.parse(req.params);
            const vehicleAttributes = UpdateVehicleRequestSchemas.parse(req.body);
            const updatedVehicle = await this.vehiclesService.updateVehicle(id, vehicleAttributes);
            res.json(updatedVehicle);
        } catch (error) {
            next(error);
        }
    }

    // PUT /vehicles/:id/maintence
    sendToMaintence: Handler = async (req, res, next) => {
        try {
            const { id } = QueryIdNumberRequestSchema.parse(req.params);
            const vehicle = await this.vehiclesService.sendToMaintence(id);
            res.json(vehicle);
        } catch (error) {
            next(error);
        }
    }

    // PUT /vehicles/:id/status/:status
    changeStatus: Handler = async (req, res, next) => {
        try {
            const { id, status } = QueryIdNumberWithStatusSchema.parse(req.params);
            const updatedVehicle = await this.vehiclesService.changeVehicleStatus(id, status);
            res.json(updatedVehicle);
        } catch (error) {
            next(error);
        }
    }

    // DELETE /vehicles/:id
    delete: Handler = async (req, res, next) => {
        try {
            const { id } = QueryIdNumberRequestSchema.parse(req.params);
            const deletedVehicle = await this.vehiclesService.deleteVehicle(id);
            res.json(deletedVehicle);
        } catch (error) {
            next(error);
        }
    }
}