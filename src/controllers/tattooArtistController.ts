import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { appointment_create, appointment_update, appointment_delete, appointment_get } from './appointmentsController';
import { AppDataSource } from "../database";

const profile = async (req: Request, res: Response) => {
}

const update = async (req: Request, res: Response) => {
}

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
}

export {create_appointment, update_appointment, delete_appointment, get_my_appointments}
