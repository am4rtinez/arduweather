import pool from "../helpers/database.mjs"

const getTemp = async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM temperature'
		const result = await pool.query(sql)
		res.status(200).json(result)
	} catch (err){
		// console.error(err)
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

const getTempDate = async (req, res, next) => {
	try {
		const sql = `SELECT * FROM temperature WHERE date = ${req.params.date}`
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

export { getTemp, getTempDate }