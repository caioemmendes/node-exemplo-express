import express from "express"
import mainRoutes from "./routes/index.js"
import productRoute from "./routes/produtos.js"
import clothesRoute from "./routes/roupas.js"
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server.use(express.json())

server.use("/produtos", productRoute)
server.use(mainRoutes)
server.use("roupas", clothesRoute)


server.use((req,res) => {
    res.status(404).send('Not found Page!')
})
server.listen(process.env.PORT)