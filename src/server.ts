import dotenv from'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler'
import { categoriesRouter } from './routes/categoriesRouter'
import { rentalsRouter } from './routes/rentalRouter'
import { usersRouter } from './routes/usersRouter'
import { vehiclesRouter } from './routes/vehiclesRouter'
import { authRouter } from './routes/authRouter'
import { paymentsRouter } from './routes/paymentsRouter'

const PORT = process.env.PORT ?? 3000
const PROTOCOL = process.env.PROTOCOL ?? 'http'
const BASE_URL = process.env.BASE_URL ?? 'localhost'

const app = express()

app.use(cors())
app.use(express.json())

// Test
app.get('/', (req, res) => { res.send('Servidor da simulação de aluguel de carros rodando!') })

app.use('/api/rentals', rentalsRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/vehicles', vehiclesRouter)
app.use('/api/users', usersRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/auth', authRouter)


app.use(errorHandler)

app.listen(PORT, ()=>console.log(`${PROTOCOL}://${BASE_URL}:${PORT}/`))