import pool from "../helpers/database.mjs"

const getUnits = async (req, res, next) => {
	try {
		const sql = 'SELECT u.id, u.unit, u.representation, ud.dimension FROM units u LEFT JOIN unit_dimension ud ON ud.id = u.dimension_id'
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

export { getUnits }