import express from 'express'
import routes from './routes/UserRoutes'
import { errorMiddleware } from './middlewares/error-middleware'

const PORT = 3000
const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use(errorMiddleware)
app.use('/api', routes)


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})