// import { createPool } from "mysql2/promise"

// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: 3306,
//     database: 'companydb'
    
// }) 
import { createPool } from "mysql2/promise" 
import {DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE} from './config.js'

//crear y exportar la constante pool con 
// los parametros de la DB
export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})

