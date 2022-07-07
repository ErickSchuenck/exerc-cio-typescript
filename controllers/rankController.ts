import connection from '../config/db.js'
import { Request, Response } from 'express'


export default async function rankUsers(req : Request, res: Response) {
  console.log('ola!')
  try {
    res.send('ola!')
  } catch (error) {
    res.send(error)
  }
}