import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routes/routes'
import db from './mongo/mongo'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
db().then(data => {
    console.log("BD conectada con exito")
})
.catch(e => {
    console.error("[config/mongo] Error simulado")
})

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})



