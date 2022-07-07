import connection from '../config/db.js'
import { Request, response, Response } from 'express'
import axios from 'axios'

export default async function battleUsers(req : Request, res: Response) {
  try {
    const {firstUser, secondUser} = req.body
    const URL1 : string = `api.github.com/users/${firstUser}/repos`
    const URL2 : string = `api.github.com/users/${secondUser}repos`
    
    let firstUserVictories : number;
    let SecondUserVictories : number;

    console.log(firstUser, secondUser)

    axios.get(URL1).then(response => console.log(response))
    axios.get(URL2).then(response => console.log(response))

  } catch (error) {
    res.send(error)
  }
}