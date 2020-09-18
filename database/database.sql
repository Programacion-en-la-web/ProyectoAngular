CREATE DATABASE proyecto_pw;

USE proyecto_pw;

CREATE TABLE personas(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombres VARCHAR(50),
apellidos VARCHAR(50),
idtipodocumento INT,
documento INT,
lugarresidencia VARCHAR(50),
fechanacimiento DATE,
email VARCHAR(50),
telefono INT,
usuario VARCHAR(50),
contraseña VARCHAR(50),
FOREIGN KEY(idtipodocumento) REFERENCES tipodocumento(id) ON DELETE CASCADE,
FOREIGN KEY(lugarresidencia) REFERENCES ciudad(nombre) ON DELETE CASCADE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tipodocumento(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50),
descripcion VARCHAR(50)
);

CREATE TABLE ciudad(
id INT NOT NULL,
nombre VARCHAR(50) PRIMARY KEY,
descripcion VARCHAR(50)
);

DESCRIBE personas;

DESCRIBE tipodocumento;

DESCRIBE ciudad;
