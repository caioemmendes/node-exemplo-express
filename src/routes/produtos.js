import express from "express";
import { getProductsById, index } from "../controllers/produtosController";

const server = express()

server.get('/', index)

server.get('/:id', getProductsById)

export default server