import pool from "../helpers/database.mjs"

const getSensors = async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM sensors'
		const result = await pool.query(sql)
		if (result.length > 0) {
			res.status(200).json(result)
		} else {
			res.status(400).send({ message : 'No Data Found' }).end()
		}
	} catch (err){
		// console.error(err)
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

const getSensorsId = async (req, res, next) => {
	try {
		const sql = `SELECT * FROM sensors WHERE station_id = ${req.params.id}`
		const result = await pool.query(sql)
		if (result.length > 0) {
			res.status(200).json(result)
		} else {
			res.status(400).send({ message : 'No Data Found' }).end()
		}
	} catch (err){
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

export { getSensors, getSensorsId }