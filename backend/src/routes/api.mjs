import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
	res.send('Hola Mundo!')
})

import stationsRoute from './stations.mjs'
import sensorsRoute from './sensors.mjs'
import unitsRoute from './units.mjs'
// import tempRoute from './temperature.mjs'
// import humidityRoute from './humidity.mjs'
// import pressureRoute from './pressure.mjs'
// import brightnessRoute from './brightness.mjs'

router.use(stationsRoute)
router.use(sensorsRoute)
router.use(unitsRoute)
// router.use(tempRoute)
// router.use(humidityRoute)
// router.use(pressureRoute)
// router.use(brightnessRoute)

export default router