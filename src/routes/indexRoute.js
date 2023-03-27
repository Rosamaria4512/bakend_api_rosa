import { Router} from 'express'

import { indexRoute } from '../controllers/indexController.js'

const router = Router()

// Crear Ruta para prueba de DB de forma asincrona 
router.get('/prueba', indexRoute)

// Agregar este codigo a cada uta del BAckend
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});


export default router