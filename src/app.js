import express from 'express'

// importar los archivos donde estan las rutas de cada rol
import indexRoute from './routes/indexRoute.js'
import employeeRoutes from './routes/employeeRoutes.js'




// crear contante app para utilizar express
const app = express()

//use el interprete de objetos JSON
app.use(express.json())

// Usar las rutas creadas
app.use('/api',indexRoute)
app.use('/api', employeeRoutes)



// exportar el app àra ser utilizado en index.js
export default app