import mariadb from 'mariadb'
import config from '../config/database.config.mjs';

const pool = mariadb.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  connectionLimit: 5
});

export default pool