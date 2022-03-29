--- CREAR TABLA USUARIOS ---

CREATE TABLE users(
	id SERIAL,
	name TEXT,
	password TEXT
);

INSERT INTO users(name, password) VALUES('admin', 'admin');

--- CREAR TABLA USUARIOS ---