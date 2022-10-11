import { Router } from 'express'		// Importa el metodo router de express.
import * as pressureController from '../controllers/pressure.mjs'

const router = Router()		// Ejecutamos el router.

// const pressureController = require('../controllers/pressure');

// Devuelve la lista de clientes.
router.get('/pressure', pressureController.getPressure)

// Devuelve el cliente a partir de su id.
router.get('/pressure/:date', pressureController.getPressureDate)

export default router