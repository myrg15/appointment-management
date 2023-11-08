import { NextFunction, Request, Response } from "express";
import { Customers } from "../models/Customers";

const existEmail = async (req: Request, res: Response, next: NextFunction) =>{
      const { email } = req.body

      const user = await Customers.findOneBy({email})

      if(user){
        return res.status(400).json({ message: 'usuario ya existe' })
      }

      next()

}

export {existEmail}