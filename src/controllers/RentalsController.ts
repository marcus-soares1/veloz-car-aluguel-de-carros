import { Handler } from "express";
import { RentalsService } from "../services/RentalsService";
import { QueryIdRequestSchema } from "./schema/QueriesRequestSchema";
import { ReserveRentalSchema, UpdateRentalStatusSchema, CheckInSchema } from "./schema/RentalRequestSchema";

export class RentalsController {
  constructor(private readonly rentalService: RentalsService) {}

  // GET /rentals/:id
  show: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const rental = await this.rentalService.getRentalById(id);
      res.json(rental);
    } catch (error) {
      next(error);
    }
  };

  // POST /rentals
  reserve: Handler = async (req, res, next) => {
    try {
      const { user_id, vehicle_id, check_out_date, expected_check_in_date, payment_method, notes } = ReserveRentalSchema.parse(req.body);

      const reservation = await this.rentalService.reserveVehicle(
        user_id,
        vehicle_id,
        check_out_date,
        expected_check_in_date,
        payment_method,
        notes
      )

      res.status(201).json(reservation)
    } catch (error) {
      next(error);
    }
  };

  // PUT /rentals/:id/status/:status
  updateStatus: Handler = async (req, res, next) => {
    try {
      const { id, status } = UpdateRentalStatusSchema.parse(req.params);
      const { notes } = req.body;

      const rental = await this.rentalService.updateRentalStatus(id, status, notes);
      res.json(rental);
    } catch (error) {
      next(error);
    }
  };

  // PUT /rentals/:id/cancel
  cancel: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const { notes } = req.body;

      const result = await this.rentalService.cancelRental(id, notes);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  // PUT /rentals/:id/noShow
  noShow: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const { notes } = req.body;

      const result = await this.rentalService.noShow(id, notes);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  // PUT /rentals/:id/checkout
  checkOut: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const { notes } = req.body;

      const rental = await this.rentalService.checkOut(id, notes);
      res.json(rental);
    } catch (error) {
      next(error);
    }
  };

  // PUT /rentals/:id/checkin
  checkIn: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const { end_mileage, damageValue, notes } = CheckInSchema.parse(req.body);

      const rental = await this.rentalService.checkIn(id, end_mileage, damageValue, notes);
      res.json(rental);
    } catch (error) {
      next(error);
    }
  };
}