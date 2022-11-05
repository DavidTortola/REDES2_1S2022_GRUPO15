const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.controller");

router.use(cors({
    origin: '*'
}));


router.post("/codigoUsuario", ctrl.codigoUsuario);

module.exports = router;
