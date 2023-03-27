
import {pool} from '../dbConect.js'

export const getEmployees = async (req, res)=>{
    const [result]= await pool.query('SELECT * FROM employee')
    res.json(result)
}

export const postEmployees = async (req, res)=>{
    try {
        const {name, salary} = req.body //configurar el body del json a enviar
        // insertar los datos mediante JSON
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary ])
        res.send({ // muestra los datos ingresados como resultado del envio JSON
        id: rows.insertId,
        name,
        salary,
        
    })
    } catch (error) {
        return res.status(500).json({
            message: 'not found',
            })
    }
}

// Metodo para actualizar Usuario PATCH





