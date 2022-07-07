import { Router } from "express"
const battleRouter = Router()
import battleUsers from '../controllers/battleController.js'

battleRouter.post('./battle', battleUsers)

export default battleRouter;