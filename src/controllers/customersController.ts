import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Customers } from "../models/Customers";
import bcrypt from "bcrypt";
import { Appointment } from "../models/Appointment";


const register = async (req: Request, res: Response) => {
    try {
        // recuperamos la info que nos envian desde el body
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password
        const phone_number = req.body.phone_number
    
        // validaciones email, password
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (!emailRegex.test(email)) {
          return res.json({ mensaje: 'Correo electrónico no válido' });
        }
    
        // Trato la informacion
        const encryptedPassword = bcrypt.hashSync(password, 10)
    
        // Guardamos la info en la bd
        const newUser = await Customers.create({
          username: username,
          email: email,
          password: encryptedPassword,
          phone_number:phone_number
        }).save()
    
        // Devolvemos una respuesta
        return res.json({
          success: true,
          message: "User created succesfully",
          token: newUser
        })
      } catch (error) {
        return res.status(500).json(
          {
            success: false,
            message: "user cant be created",
            error: error
          }
        )
      }
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
    
        return res.json(
          {
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

/*Controles del citas */
const create_appointment = async (req: Request, res: Response) => {
    const new_appointmennt = await Appointment.create({
        date: req.body.date,
        sessions: req.body.sessions,
        availability: true,
        time:'',
        created_at:'',
        updated_at:'',
      }).save()
}

const update_appointment = async (req: Request, res: Response) => {
}

const delete_appointment = async (req: Request, res: Response) => {
}

const get_appointments = async (req: Request, res: Response) => {
    /*Ver todas las citas que tengo como cliente (solo las propias). */
}

const get_tattooartists = async (req: Request, res: Response) => {
    /* Listar tatuadores*/
}


export { register, login, profile, update, create_appointment, update_appointment, delete_appointment, get_appointments, get_tattooartists}