import express from 'express';
import cors from 'cors'
// import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routes/index.mjs'
import apiRoutes from './routes/api.mjs'

dotenv.config()

const app = express()
const PORT = 3001

const unknownEndpoint = (req, res) => {
	const error = { status: 404, message: 'Unknown endpoint' }
	res.status(404).send({ error: 'Unknown endpoint' })
}

// Settings
app.set('port', process.env.PORT || PORT)

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/', routes)					// Rutas del site apuntaran a la pagina con vue.
app.use('/api', apiRoutes)		// Rutas de la api

app.use(unknownEndpoint)

// Server initialization
app.listen(app.set('port'), () => {
	console.log(`Servidor ejecutandose en http://localhost:${app.set('port')}`)
})