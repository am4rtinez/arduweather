import { Router } from 'express'
import * as sensorsController from '../controllers/sensors.mjs'

const router = Router()

// Returns all sensors from the DB.
router.get('/sensors', sensorsController.getSensors)

// Returns all sensors from one station by station_id.
router.get('/stations/:id', sensorsController.getSensorsId)

export default router