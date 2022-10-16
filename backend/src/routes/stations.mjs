import { Router } from 'express'
import * as stationsController from '../controllers/stations.mjs'

const router = Router()

// Returns a list with all the stations.
router.get('/stations', stationsController.getStations)

// Return data from a station by id.
router.get('/stations/:id', stationsController.getStationId)

export default router