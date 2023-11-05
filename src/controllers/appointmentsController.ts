import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import {Customers} from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { time } from "console";
import { Timestamp } from "typeorm";
import { AppDataSource } from "../database";

const createAppointment = async (req: Request, res: Response) => {
  try {
    const { date, sessions, availability, time } = req.body; 

    // Crear una nueva cita y guardarla en la base de datos
    const new_appointement = new Appointment();
    new_appointement.date = new Date();
    new_appointement.sessions = '';
    new_appointement.availability = true,
    new_appointement.time = ''
    await AppDataSource.manager.save(new_appointement)

    return res.json({
      success: true,
      message: "Appointment created successfully",
      appointment: new_appointement});
  } catch (error) {
    return res.status(500).json({ error: "Error creating the appointment" });
  }
};

export { createAppointment };    

