export const index = (req,res) => {
    res.send(`Página com todos os produtos`)
}

export const getProductsById = (req,res) => {
    let id = req.params.id
    res.send(`Pagina do Produto id:${id}`)
}
