import dotenv from'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler'
import { categoriesRouter } from './routes/categoriesRouter'
import { rentalsRouter } from './routes/rentalRouter'
import { usersRouter } from './routes/usersRouter'
import { vehiclesRouter } from './routes/vehiclesRouter'

const PORT = process.env.PORT ?? 3000
const PROTOCOL = process.env.PROTOCOL ?? 'http'
const BASE_URL = process.env.BASE_URL ?? 'localhost'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor da simulação de aluguel de carros rodando!');
})
app.use(categoriesRouter)
app.use(rentalsRouter)
app.use(usersRouter)
app.use(vehiclesRouter)


app.use(errorHandler)

app.listen(PORT, ()=>console.log(`${PROTOCOL}://${BASE_URL}:${PORT}/`))