import app from './app.js'

import {PORT} from './config.js'

import cors from 'cors'



app.listen(PORT)
console.log('El servidor activo en el puerto 3000')
app.use(cors())





// app.listen(3000)
// console.log('server listening on port 3000');

