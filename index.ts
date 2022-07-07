import express, {json} from "express"
import dotenv from "dotenv"
dotenv.config()
import router from './routes/index.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())
app.use(router)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Server ligado na porta', port)
})