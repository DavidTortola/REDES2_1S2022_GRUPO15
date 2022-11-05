CREATE TABLE usuario(
    cod_user INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    user varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    hash varchar(250) NOT NULL,
    picture varchar(100) NOT NULL
);

CREATE TABLE amigo(
    cod_user INT NOT NULL,
    cod_amigo INT NOT NULL,
    espera INT NOT NULL,
    FOREIGN KEY (cod_user) REFERENCES usuario(cod_user),
    FOREIGN KEY (cod_amigo) REFERENCES usuario(cod_user)
);

CREATE TABLE publicacion(
    cod_publicacion INT AUTO_INCREMENT PRIMARY KEY,
    cod_user INT NOT NULL,
    ruta varchar(100) NOT NULL,
    descripcion varchar(250) NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cod_user) REFERENCES usuario(cod_user)
);

CREATE TABLE etiqueta(
    cod_etiqueta INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    cod_publicacion INT NOT NULL,
    FOREIGN KEY (cod_publicacion) REFERENCES publicacion(cod_publicacion)
);