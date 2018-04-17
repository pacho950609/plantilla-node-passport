var express = require('express');
var controladores= require('.././controladores');
var router = express.Router();
var passport = require('passport');
var middleware = require('../middleware/middleware');

router.get('/registrar',controladores.banco.registrar);
router.get('/solicitarCredito',middleware.isLogged ,controladores.banco.solicitarCredito);
router.get('/success',controladores.banco.success);
router.get('/fail',controladores.banco.fail);

router.post('/log',passport.authenticate('local',{  successRedirect: '/success', failureRedirect:'/fail',}));  
 


module.exports = router ; 