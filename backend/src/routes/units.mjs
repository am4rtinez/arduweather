import { Router } from 'express'
import * as unitsController from '../controllers/units.mjs'

const router = Router()		// Ejecutamos el router.

// Returns units list.
router.get('/units', unitsController.getUnits)

// Returns all sensors from one station by station_id.
// router.get('/dimensions', sensorsController.getSensorsId)

export default router