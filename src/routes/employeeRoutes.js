import { Router} from 'express'

// importar los controladores realizados para cada ruta
import {getEmployees, postEmployees} from '../controllers/employeeController.js'

const router = Router()

router.get('/employee', getEmployees)

// crear la ruta para paserle el paramentro ID
router.get('/employee/:id', getEmployees)

router.post('/employee', postEmployees)

// router.patch('/employee/:id', UpdateEmployee)

// Agregar este codigo a cada uta del BAckend
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});


export default router