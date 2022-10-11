DROP DATABASE IF EXISTS w_station;

CREATE DATABASE w_station;

USE w_station;

CREATE TABLE workstations (
	id INT PRIMARY KEY AUTO_INCREMENT,
	country CHAR(3) NOT NULL, 					-- Usa codigos de pais ISO3.
	owner_name VARCHAR(150) NOT NULL,
	owner_lastname VARCHAR(150) NOT NULL,
	x FLOAT NOT NULL,
	y FLOAT NOT NULL,
	active BOOLEAN,
	start_date TIMESTAMP NOT NULL,
	mod_date TIMESTAMP NOT NULL,
	end_date TIMESTAMP) 
	ENGINE=InnoDB;

CREATE TABLE temperatures (id INT PRIMARY KEY AUTO_INCREMENT, , temperature FLOAT NOT NULL, date TIMESTAMP NOT NULL) ENGINE=InnoDB;

CREATE TABLE pressures (id INT PRIMARY KEY AUTO_INCREMENT, preasure FLOAT NOT NULL, date TIMESTAMP NOT NULL) ENGINE=InnoDB;

CREATE TABLE humidity (id INT PRIMARY KEY AUTO_INCREMENT, humidity FLOAT NOT NULL, date TIMESTAMP NOT NULL) ENGINE=InnoDB;

CREATE TABLE brightness (id INT PRIMARY KEY AUTO_INCREMENT, brightness FLOAT NOT NULL, date TIMESTAMP NOT NULL) ENGINE=InnoDB;

CREATE USER 'arduino' IDENTIFIED BY '1234';

GRANT SELECT, INSERT, UPDATE ON `w_station`.* TO 'arduino'@'%';

FLUSH PRIVILEGES;