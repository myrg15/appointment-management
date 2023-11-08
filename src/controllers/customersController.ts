import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Customers } from "../models/Customers";
import bcrypt from "bcrypt";
import { Tattooartist } from "../models/Tattooartist";
import { appointment_create, appointments_get, appointment_update, appointment_delete } from './appointmentsController';
import { AppDataSource } from "../database";
import { Appointment } from "../models/Appointment";

const register = async (req: Request, res: Response) => {
  const { username, email, password, phone_number, role } = req.body
  try {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.json({ mensaje: 'email invalid' });
    }
    const new_customer = new Customers();
    new_customer.username = username;
    new_customer.email = email;
    new_customer.password = bcrypt.hashSync(password, 10);
    new_customer.phone_number = phone_number
    new_customer.role = role
    await AppDataSource.manager.save(new_customer)

    return res.json({
      success: true,
      message: 'user created succesfully',
      customer: new_customer
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "user cannot be created",
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
  //generate token
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
    message: "user logged succesfully",
    token: token
  });
}
const profile = async (req: Request, res: Response) => {
  try {
    const customer = await Customers.findOneBy(
      {
        email: req.body.email
      });
    return res.json(
      {
        success: true,
        message: 'profile customer retrieved',
        date: customer
      });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: 'customer not get profile',
      }
    );
  }
}
const update = async (req: Request, res: Response) => {
  try {
    const { username, email, password, phone_number } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        mensaje: 'email inavalid',
      });
    }
    const updateProfile = await Customers.save(Customers);
    return res.json({
      success: true,
      message: 'customer profile update successfully',
      data: updateProfile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'customer profile update failed'
    });
  }
}
const viewappointments = async (req: Request, res: Response) => {
  try {
    const myappointmentes = await Appointment.find({
      where: {
        customers_id: req.token.customers_id
      }
    })
    return res.json(
      {
        success: true,
        message: "profile user retrieved",
        data: myappointmentes
      });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "user can't get profile",
        error: error
      }
    )
  }
}
const getTattooartist = async (req: Request, res: Response) => {
  try {
    const viewTattoartist = await Tattooartist.find({
      where: {
        id: req.body.id
      }
    })
    return res.json(
      {
        success: true,
        message: "profile user retrieved",
        data: viewTattoartist
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error searching tattoo artist",
    });
  }
}
export { register, login, profile, update, viewappointments }
