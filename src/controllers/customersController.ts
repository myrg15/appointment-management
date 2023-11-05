import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Customers } from "../models/Customers";
import bcrypt from "bcrypt";
import { Tattooartist } from "../models/Tattooartist";
import { appointment_create, appointment_update, appointment_delete, appointment_get } from './appointmentsController';
import { AppDataSource } from "../database";

//import { resolve } from "dns/promises";
//import { createConnection, getRepository } from "typeorm";

const register = async (req: Request, res: Response) => {
      // recuperamos la info que nos envian desde el body
      
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password
      const phone_number = req.body.phone_number
   
      // validaciones email, password
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(email)) {
        return res.json({ mensaje: 'Correo electrónico no válido'});
      }
  
      // Trato la informacion
      const encryptedPassword = bcrypt.hashSync(password, 10)
  
      // Guardamos la info en la bd
      
      const new_customer = new Customers();
      new_customer.username = username;
      new_customer.email = email;
      new_customer.password = encryptedPassword;
      new_customer.phone_number = phone_number
      await AppDataSource.manager.save(new_customer)

      /*const newCustomer = await Customers.create({
        username: username,
        email: email,
        password: encryptedPassword,
        phone_number:phone_number
      }).save()*/
  
      return res.json({
              success: true,
              message: 'User created succesfully',
              customer: new_customer
            })
}

const login = async (req: Request, res: Response) => {
    try {
        // Recupero info del body
        const email = req.body.email
        const password = req.body.password
    
        // Consulto en bd un usuario por email
        const user = await Customers.findOneBy(
          {
            email: email
          }
        )
    
        if (!user) {
          return res.status(400).json(
            {
              success: true,
              message: 'User or password incorrect',
            }
          )
        }
    
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(400).json(
            {
              success: true,
              message: 'User or password incorrect',
            }
          )
        }
    
        // Generar token
        const token = jwt.sign(
          {
            id: user.customers_id,
            role: user.role,
            email: user.email
          },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "3h",
          }
        );
    
        return res.json({
            success: true,
            message: "User logged succesfully",
            token: token
          }
        )
      } catch (error) {
        return res.status(500).json(
          {
            success: false,
            message: "users cant be logged",
            error: error
          }
        )
      }
}

const profile = async (req: Request, res: Response) => {
}

const update = async (req: Request, res: Response) => {

}

/*Creacion de citas */
const create_appointment = async (req: Request, res: Response) => {
  appointment_create(req);
  return res.json({'datae':'hola'})
}

const update_appointment = async (req: Request, res: Response) => {
  appointment_update(req)
}

const delete_appointment = async (req: Request, res: Response) => {
  appointment_delete(req)
}

const get_my_appointments = async (req: Request, res: Response) => {
  //id, activa
  const all_artists = await Tattooartist.find();
}

const get_tattooartists = async (req: Request, res: Response) => {
  /* Listar tatuadores*/
  const all_artists = await Tattooartist.find();
  return all_artists;
}

export { register, login, profile, update, create_appointment, update_appointment, delete_appointment, get_my_appointments, get_tattooartists}