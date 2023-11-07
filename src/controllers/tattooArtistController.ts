import { Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Tattooartist } from "../models/Tattooartist";
import { appointment_create, appointment_update, appointment_delete, appointment_get } from './appointmentsController';
import { AppDataSource } from "../database";

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
 
const create_tattooArtist = async (req: Request, res: Response) => {
  try {
    const token = req.headers.token;
    let decodedToken : JwtPayload;

    try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    } catch (error)} 
    return res.status(401).json({
      success:false,
      message: 'token invalid or expired',
    });
  }
    
    const tatuadorRole = decodedToken.role;

    if (tatuadorRole !== 'super_admin') {
      return res.status(403).json({
        success: false,
        message: 'permission denied only super admins can create tattoartist',
      });
    }

   /* const token = jwt.sign(
      {
        role : role
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
    });*/

    const new_tattoArtist = new Tattooartist();
    new_tattoArtist.id =   
    new_tattoArtist.username = req.body.username; 
    new_tattoArtist.email = req.body.email;
    new_tattoArtist.phone_number = req.body.phone_number;
    new_tattoArtist.password = req.body.password;
    new_tattoArtist.role = req.body.role
    await AppDataSource.manager.save(new_tattoArtist)
  } catch (error) 
    return res.json({
      success: true,
      message: 'user created succesfully',
      new_tattoArtist: new_tattoArtist
    })
  
 /*   return res.json({
      success: false,
      message: "user cannot be created",
    });
  };*/
 

const profile = async (req: Request, res: Response) => {
}

const update = async (req: Request, res: Response) => {
}

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
}

export {create_appointment, update_appointment, delete_appointment, get_my_appointments}
