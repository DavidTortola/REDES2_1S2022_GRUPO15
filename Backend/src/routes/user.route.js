const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.controller");



router.get("/codigoUsuario", ctrl.codigoUsuario);

module.exports = router;
