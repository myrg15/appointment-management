import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import {Customers} from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { time } from "console";
import { Timestamp } from "typeorm";
import { getRepository } from "typeorm";

const createAppointment = async (req: Request, res: Response) => {
  try {
    const { date, sessions, availability, time } = req.body; 
    
    const appointmentRepository = getRepository(Appointment);

    // Crear una nueva cita y guardarla en la base de datos
    const newAppointment = appointmentRepository.create({
      date,
      sessions,
      availability,
      time,
    });

    await appointmentRepository.save(newAppointment);

    return res.json({
      success: true,
      message: "Appointment created successfully",
      appointment: {
      id: newAppointment.id,
      date: newAppointment.date,
      sessions: newAppointment.sessions, 
      availability: newAppointment.availability, 
      time: newAppointment.time, 
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Error creating the appointment" });
  }
};

export { createAppointment };    

