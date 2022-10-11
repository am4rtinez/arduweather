import { Router } from 'express'		// Importa el metodo router de express.
import * as humidityController from '../controllers/humidity.mjs'

const router = Router()		// Ejecutamos el router.

// Devuelve la lista de clientes.
router.get('/humidity', humidityController.getHumidity)

// Devuelve el cliente a partir de su id.
router.get('/humidity/:date', humidityController.getHumidityDate)

export default router