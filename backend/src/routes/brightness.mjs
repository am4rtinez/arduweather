import { Router } from 'express'		// Importa el metodo router de express.
import * as brightnessController from '../controllers/brightness.mjs'

const router = Router()		// Ejecutamos el router.

// Devuelve la lista de clientes.
router.get('/brightness', brightnessController.getBrightness)

// Devuelve el cliente a partir de su id.
router.get('/brightness/:date', brightnessController.getBrightnessDate)

export default router