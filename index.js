import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import serveIndex from 'serve-index'
import CardRoute from './routes/CardRoute.js'
import AssetsRoute from "./routes/AssetsRoute.js";
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/static', express.static('images'))
app.use('/images', serveIndex('images', {icons: true}));
app.use(CardRoute)
app.use(AssetsRoute)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
