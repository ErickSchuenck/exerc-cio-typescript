import connection from '../config/db.js'
import { Request, response, Response } from 'express'
import axios from 'axios'
import * as battleService from '../services/battleService.js'

export default async function battle(req : Request, res: Response) {
  try {
    const {firstUser, secondUser} : {firstUser: string, secondUser: string}= req.body
    //JOI
    if(!firstUser || !secondUser){
      res.sendStatus(422)
    }

    const battleResult = await battleService.battle(firstUser, secondUser)
    res.sendStatus(battleResult)

    // services

    

  } catch (error) {
    res.send(error)
  }
}
