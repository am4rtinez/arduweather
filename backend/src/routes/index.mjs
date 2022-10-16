import { Router } from 'express'
const router = Router()

// Route generation
router.get('/', (req, res) => {
	res.send('Hello world!') // This route serves the frontend page.
})

export default router