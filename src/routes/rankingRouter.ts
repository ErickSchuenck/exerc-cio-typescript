import { Router } from "express"
const rankingRouter = Router()
import rankUsers from '../controllers/rankController.js'

rankingRouter.get('/ranking', rankUsers)

export default rankingRouter;