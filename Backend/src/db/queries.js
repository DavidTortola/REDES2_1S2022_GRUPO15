const registerUser = ` INSERT INTO usuario 
(name, user, email,hash,picture) 
VALUES (?, ?, ?, ?, ?);`;

const codUser = `SELECT cod_user
FROM usuario 
WHERE user = ?;`;

const codPublicacion = `SELECT COUNT(*) as cod
FROM publicacion;`;

const addEtiqueta = `INSERT INTO etiqueta
(Nombre, cod_publicacion)
VALUES (?, ?);`;

const addPublicacion = ` INSERT INTO publicacion 
(cod_user, ruta, descripcion) 
VALUES (?, ?, ?);`;

const obtenerPublicaciones = `SELECT cod_publicacion, ruta, descripcion, fecha
FROM publicacion
WHERE cod_user = ?;`;

const etiquetasPublicacion = `SELECT nombre
FROM etiqueta
WHERE cod_publicacion = ?;`;

const solicitudesHechas = `SELECT cod_amigo, estado
FROM amigo
WHERE cod_user = ?;`;

const solicitudesRecibidas = `SELECT cod_user, estado
FROM amigo
WHERE cod_amigo = ?;`;

const perfilUsuario = `SELECT name, user, email, hash, picture
FROM usuario
WHERE cod_user = ?;`;

const updateAmigo = `UPDATE amigo
SET estado = ?
WHERE cod_user = ?
AND cod_amigo = ?;`;

const agregarAmigo = `INSERT INTO amigo
(cod_user, cod_amigo, estado)
VALUES (?, ?, ?);`;

const users = `SELECT *
FROM usuario;`;

const updatePerfil = `UPDATE usuario
SET name = ?, user = ?
WHERE cod_user = ?;`;

module.exports = {
  registerUser,
  codPublicacion,
  addEtiqueta,
  addPublicacion,
  obtenerPublicaciones,
  etiquetasPublicacion,
  solicitudesHechas,
  solicitudesRecibidas,
  perfilUsuario,
  updateAmigo,
  users,
  agregarAmigo,
  updatePerfil,
  codUser,
};
