--- CREAR TABLA USUARIOS ---

CREATE TABLE users(
	id SERIAL,
	name TEXT,
	password TEXT
);

INSERT INTO users(name, password) VALUES('admin', 'admin');

--- CREAR TABLA USUARIOS ---

--- AÑADIR USUARIO ESPI Y MAXI---

INSERT INTO users(name, password) VALUES('espi', 'admin');
INSERT INTO users(name, password) VALUES('maxi', 'admin');

--- AÑADIR USUARIO ESPI Y MAXI---


--- CREAR TABLA PRODUCTOS ---

CREATE TABLE products(
	id SERIAL,
	name TEXT,
	price TEXT,
	path TEXT,
	isOffer BOOLEAN
);

--- CREAR TABLA PRODUCTOS ---
