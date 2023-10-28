const express = require('express');
const router = express.Router();
const locationController = require("../controller/geolocation.controller")
// Ruta para obtener información de geolocalización
router.get('/location', locationController.location );
router.get('/sendlocation', locationController.sendLocation );



module.exports = router
