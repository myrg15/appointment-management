import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Customers } from "../models/Customers";
import bcrypt from "bcrypt";
import { Tattooartist } from "../models/Tattooartist";
import { appointment_create, appointment_update, appointment_delete, appointment_get } from './appointmentsController';
import { AppDataSource } from "../database";
import { Appointment } from "../models/Appointment";

const register = async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password
    const phone_number = req.body.phone_number

    // Validacion de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      return res.json({ mensaje: 'Correo electrónico no válido' });
    }

    const new_customer = new Customers();
    new_customer.username = username;
    new_customer.email = email;
    new_customer.password = bcrypt.hashSync(password, 10);
    new_customer.phone_number = phone_number
    await AppDataSource.manager.save(new_customer)

    return res.json({
      success: true,
      message: 'User created succesfully',
      customer: new_customer
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "No fue posible crear el usuario",
    });
  }
}
const login = async (req: Request, res: Response) => {
  const email = req.body.email
  const password = req.body.password
  const customer = await Customers.findOneBy(
    {
      email: email
    }
  );

  if (!customer) {
    return res.status(400).json({
      success: true,
      message: 'User or password incorrect',
    })
  }

  if (!bcrypt.compareSync(password, customer.password)) {
    return res.status(400).json({
      success: true,
      message: 'User or password incorrect',
    })
  }

  //Generar token
  const token = jwt.sign({
    customers_id: customer.customers_id,
    role: customer.role,
    email: customer.email
  },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '3h',
    });

  return res.json({
    success: true,
    message: "User logged succesfully",
    token: token
  });
}
const profile = async (req: Request, res: Response) => {
  /* QUITAR LA CONTRASENA DE LA RESPUESTA */
  try {
    const customer = await Customers.findOneBy(
      {
        email: req.body.email
      });
    return res.json({ success: true, 'profile': customer });
  } catch (error) {
    return res.json({ success: false, 'profile': {} });
  }
}
const update = async (req: Request, res: Response) => {
  //app.put('/perfil/:id', async (req: Request, res: Response) => {
    try {
      const customerId = req.token.id;

      const { username, email, phone_number } = req.body;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(email)) {
        return res.json({ mensaje: 'Email inválido' });
      }
      const customerRepository = AppDataSource.getRepository(Customers);
      const all_customers = await customerRepository.find();
      const single_customer = await customerRepository.findOneBy({customers_id:customerId});
      if (!single_customer) {
        return res.json({ success:false, message: 'Usuario no encontrado' });
      }else{
        single_customer.username = username;
        single_customer.email = email;
        single_customer.phone_number = phone_number;
        await customerRepository.save(single_customer);

        return res.json({success:true, message:'user created', customer:single_customer});
      } 
    }
    catch (error){
      return res.json({success:false, message:'no fue posible actualizar usuario'})
    }
}
/*Creacion de citas */
const create_appointment = async (req: Request, res: Response) => {
  return appointment_create(req, res);
}
const update_appointment = async (req: Request, res: Response) => {
  appointment_update(req)
}
const delete_appointment = async (req: Request, res: Response) => {
  appointment_delete(req);
}
const get_my_appointments = async (req: Request, res: Response) => {
  //Aplicar filtro
  const all_appoinments = await Appointment.find();
  return res.json({ success: true, appointments: all_appoinments })
}
const get_tattooartists = async (req: Request, res: Response) => {
  /* Listado de tatuadores*/
  const all_artists = await Tattooartist.find();
  return res.json({ success: true, artists: all_artists })
}

export { register, login, profile, update, create_appointment, update_appointment, delete_appointment, get_my_appointments, get_tattooartists }
