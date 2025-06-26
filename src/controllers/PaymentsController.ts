import {  Handler } from 'express'
import { PaymentsService } from '../services/PaymentsService'
import { HttpError } from '../errors/HttpError'
import { QueryIdRequestSchema } from './schema/QueriesRequestSchema'

export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  // GET /payments
  getAllPayments: Handler = async (req, res, next) => {
    try {
      const payments = await this.paymentsService.getAllPayments();
      res.json(payments);
    } catch (error) {
      next(error)
    }
  }

  // GET /payments/:id
  getPaymentById: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params)

      const payment = await this.paymentsService.getPaymentById(id)
      if (!payment) throw new HttpError('Payment not found', 404)
      
      res.json(payment)
    } catch (error) {
      next(error);
    }
  }

  // PUT /payments/:id/process
  processPayment: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params)
      const updatedPayment = await this.paymentsService.processPayment(id)
      if (!updatedPayment) throw new HttpError('Payment not found', 404)

      res.json(updatedPayment)
    } catch (error) {
      next(error);
    }
  }

  // DELETE /payments/:id
  deletePayment: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params)

      const deletedPayment = await this.paymentsService.deletePayment(id);
      if (!deletedPayment) throw new HttpError('Payment not found', 404)

      res.status(204)
    } catch (error) {
      next(error);
    }
  }
}