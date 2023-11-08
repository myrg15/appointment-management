import { Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Tattooartist } from "../models/Tattooartist";
import { appointment_create, appointment_update, appointment_delete} from './appointmentsController';
import { AppDataSource } from "../database";
import { Appointment } from "../models/Appointment";
import { userInfo } from "os";

const login = async (req: Request, res: Response) =>{
try {
  const email = req.body.email;
  const password = req.body.password;
  const tattooArtist = await Tattooartist.findOneBy(
    { 
      email: email 
    }
  );
  if (!tattooArtist) {
    return res.status(400).json({
      success: false,
      message: 'email incorrect',
    });
  }
  if (!bcrypt.compareSync(password, tattooArtist.password)) {
    return res.status(400).json({
      success: false,
      message: 'password incorrect',
    });
  }
  if (tattooArtist.role !== 'super_admin') {
    return res.status(400).json({
      success: false,
      message: 'role incorrect',
    });
  }
  const token = jwt.sign(
    {
      id: tattooArtist.id,
      role: tattooArtist.role,
      email: tattooArtist.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '3h',
    }
  );
  return res.json({
    success: true,
    message: 'user successfully authenticated',
    token: token,
  });
}catch (error) {
    return res.json({
      success: false,
      message: "user cannot be created",
    });
  };
}


const getSingleAppointment = async (req: Request, res: Response) => {
    try {
       // const tattooArtist = req.token.id;
        const appointment_id = req.params.id;

        const appointment = await Appointment.findOne({
            where: {
                id: parseInt(appointment_id as string)
            }
              });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "appointment not found",
            });
        }

        return res.json({
            success: true,
            message: "appointment retrieved",
            data: appointment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while retrieving appointment",
        });
    }
};

const getAppointmentTatto = async (req: Request, res: Response) => {
    const {token} = req

    const userId = token.customers_id

    const appointments = await Appointment.find({ where :{ customers_id : userId} })

    res.status(200).json({appointments})
}


//PENDIENTE DESARROLLAR ES UN EXTRA
const create_tattooArtist = async (req: Request, res: Response) => {
  res.status(200).json({})
}

export {login, getSingleAppointment, create_tattooArtist, getAppointmentTatto}
