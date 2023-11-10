import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import { Customers } from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { AppDataSource } from "../database";

const appointments_get_all = async (req: Request, res: Response) => {
  const { token } = req
  if (token.role !== "admin") {
    res.status(401).json({ message: 'No auth' })
  }
  const appointments = await Appointment.find()
  res.status(200).json({
    appointments
  })
}

const appointments_get_tattoo = async (req: Request, res: Response) => {
  const { token } = req;
  const userId = token.customers_id
  const appointments = await Appointment.find({ where: { tattooartist_id: userId } })
  res.status(200).json({ appointments })
}

const appointment_create = async (req: Request, res: Response) => {
  const { date, sessions, availability, time, tattoartist_id, customers_id } = req.body
  const { token } = req
  const new_appointment = new Appointment();
  if (token.role == 'admin') {
    new_appointment.tattooartist_id = token.customers_id
    new_appointment.customers_id = customers_id
    new_appointment.time = time
    new_appointment.sessions = sessions
    new_appointment.date = date
    new_appointment.availability = availability
    const appointment = await AppDataSource.manager.save(new_appointment);
    return res.status(200).json({
      appointment
    })
  }
  new_appointment.tattooartist_id = tattoartist_id
  new_appointment.customers_id = token.customers_id
  new_appointment.time = time
  new_appointment.sessions = sessions
  new_appointment.date = date
  new_appointment.availability = availability
  const appointment = await AppDataSource.manager.save(new_appointment);
  return res.status(200).json({
    appointment
  })
}

const appointment_update = async (req: Request, res: Response) => {
  const { id } = req.params
  const appointment = await Appointment.findOneBy({ id: parseInt(id) })
  if (!appointment) {
    return res.status(404).json({
      message: "Not Found Appointment"
    })
  }
  Object.assign(appointment, req.body)
  const updateAppointment = await Appointment.save(appointment)
  res.status(200).json({
    updateAppointment
  })
}

const appointment_delete = async (req: Request, res: Response) => {
  const { id } = req.params
  const appointment = await Appointment.findOneBy({ id: parseInt(id) })
  if (!appointment) {
    return res.status(404).json({
      message: "Not Found Appointment"
    })
  }
  await Appointment.remove(appointment)
  res.status(200).json({
    message: 'Appointment delete success'
  })
}
export { appointments_get_tattoo, appointment_create, appointment_update, appointment_delete, appointments_get_all };