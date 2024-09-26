import express from 'express';
const router = express.Router();
import FedexTrackingController from '../controllers/fedexTrackingController.js'

router.get("/track", FedexTrackingController.trackFedexShipment)

export default router