import { Router } from 'express'		// Importa el metodo router de express.
import * as tempController from '../controllers/temperature.mjs'

const router = Router()		// Ejecutamos el router.

// const tempController = require('../controllers/temperature');

// Devuelve la lista de clientes.
router.get('/temperature', tempController.getTemp)

// Devuelve el cliente a partir de su id.
router.get('/temperature/:date', tempController.getTempDate)

export default router