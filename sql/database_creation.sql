DROP DATABASE IF EXISTS arduweather;
CREATE DATABASE arduweather;
USE arduweather;

-- ---------------- Tables creation ----------------
-- Stations table creation.
DROP TABLE IF EXISTS stations;
CREATE TABLE stations (
	id varchar(9) PRIMARY KEY UNIQUE NOT NULL,
	name varchar(100) NOT NULL,
	description varchar(255) NOT NULL,
	owner_name varchar(255) NOT NULL,
	owner_lastname varchar(255) NOT NULL,
	owner_email varchar(200) NOT NULL,
	owner_username varchar(50) NOT NULL,
	country char(2) NOT NULL,
	latitude double,
	longitude double,
	create_date timestamp NOT NULL,
	mod_date timestamp,
	deactiv_date timestamp,
	active boolean
)ENGINE=InnoDB;

-- Sensors table creation.
DROP TABLE IF EXISTS sensors;
CREATE TABLE sensors (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	station_id varchar(9) NOT NULL,
	name varchar(100) NOT NULL,
	description varchar(200) NOT NULL,
	manufacturer varchar(200) NOT NULL,
	sensor_type varchar(100) NOT NULL,
	CONSTRAINT sensors_station_fk FOREIGN KEY (station_id) REFERENCES stations (id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB;

DROP TABLE IF EXISTS unit_dimension;
CREATE TABLE unit_dimension (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	dimension varchar(100) NOT NULL UNIQUE
)ENGINE=InnoDB;

DROP TABLE IF EXISTS units;
CREATE TABLE units (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	dimension_id int NOT NULL,
	unit varchar(100) NOT NULL,
	representation varchar(4) NOT NULL,
	CONSTRAINT dimension_unit_fk FOREIGN KEY (dimension_id) REFERENCES unit_dimension (id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB;

-- Readings table creation.
DROP TABLE IF EXISTS readings;
CREATE TABLE readings (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	station_id varchar(9) NOT NULL,
	unit_id int NOT NULL,
	value double,
	CONSTRAINT readings_station_fk FOREIGN KEY (station_id) REFERENCES stations (id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT readings_unit_fk FOREIGN KEY (unit_id) REFERENCES units (id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB;

-- ---------- DATA INSERTION -------------

-- Data insertion for UNIT_DIMENSION table.
INSERT INTO unit_dimension VALUES 
(1, 'temperature'),
(2, 'humidity'),
(3, 'pressure'),
(4, 'illuminance'),
(5, 'irradiance');

-- Data insertion for UNITS table.
INSERT INTO units (dimension_id, unit, representation) VALUES
(1, 'Celsius', '°C'),
(1, 'Fahrenheit', '°F'),
(1, 'Kelvin', 'K'),
(2, 'Percentage', '%'),
(3, 'HectoPascal', 'hPa'),
(3, 'Pascal', 'Pa'),
(3, 'Bar', 'bar'),
(3, 'Technical Atmosphere', 'at'),
(3, 'Standard Atmosphere', 'atm'),
(3, 'Pound per square inch', 'psi'),
(4, 'Lux', 'lx'),
(5, 'Watts per square metre', 'W/m2');
