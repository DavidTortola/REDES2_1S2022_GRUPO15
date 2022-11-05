const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.controller");



router.post("/codigoUsuario", ctrl.codigoUsuario);

module.exports = router;
