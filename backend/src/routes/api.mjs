import { Router } from 'express'		// Importa el metodo router de express.

const router = Router()		// Ejecutamos el router.

router.get('/', (req, res) => {
	// res.render('api.pug', { title: 'API REST Gimnas', message: 'Hello there!', name: 'api' });
	res.send('Hola Mundo!')
})

import tempRoute from './temperature.mjs'
import humidityRoute from './humidity.mjs'
import pressureRoute from './pressure.mjs'
import brightnessRoute from './brightness.mjs'

router.use(tempRoute)
router.use(humidityRoute)
router.use(pressureRoute)
router.use(brightnessRoute)

export default router