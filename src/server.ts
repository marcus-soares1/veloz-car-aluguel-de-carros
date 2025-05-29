import dotenv from'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT ?? 3000
const PROTOCOL = process.env.PROTOCOL ?? 'http'
const BASE_URL = process.env.BASE_URL ?? 'localhost'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor da simulação de aluguel de carros rodando!');
})

app.listen(PORT, ()=>console.log(`${PROTOCOL}://${BASE_URL}:${PORT}/`))