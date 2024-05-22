import { Router } from "express";
import { home } from "../controllers/homeController";
import { contatos } from "../controllers/infoController";

const router = Router()

router.get('/', home)

router.get('/contato', contatos)

// router.get('/voo/:origem-:destino', (req,res) => {
//     let {origem, destino} = req.params
//     res.send(`Pesquisando vôos de ${origem} até ${destino}`)
// })

export default router
