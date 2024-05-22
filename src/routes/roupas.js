import express from "express";

const router = express()

router.get('/', (res,req) => {
    res.send('Página de roupas')
})

router.post('/', (res,req) => {
    console.log('Dados enviados por POST: ', req.body)
    res.send('Página de roupas')
})

router.get('/camisetas', (res,req) => {
    console.log('Query String: ', req.query)
    const teste = req.query.teste
    console.log(teste)
    res.send('Página de camisetas. Teste com parâmetros')
})

export default router