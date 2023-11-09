import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import { Customers } from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { AppDataSource } from "../database";

const appointment_create = async (req: Request, res: Response) => {
  const new_appointment = new Appointment();
  new_appointment.date = new Date();
  new_appointment.sessions = req.body.sessions;
  new_appointment.availability = req.body.availability;
  new_appointment.time = req.body.time;
  await AppDataSource.manager.save(new_appointment);
  return res.json({
    success: true,
    appointment: new_appointment
  });
}

const appointments_get = async (req: Request, res: Response) => {
  const { token } = req
  const userId = token.customers_id
  const user = await Customers.findOneBy({ customers_id: userId })
  res.status(200).json({})
}

  const appointment_update = async (req: Request, res: Response) => {
    try {
      const udpdate_appointment = req.params.id;
      const appointment = await Appointment.findOne({
        
        where: {
          id: parseInt(udpdate_appointment),
        },
      });
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message: 'appointment not found',
        });
      }
      if (req.body.date) {
        appointment.date = req.body.date;
      }
      if (req.body.sessions) {
        appointment.sessions = req.body.sessions;
      }
      if (req.body.availability) {
        appointment.availability = req.body.availability;
      }
      if (req.body.time) {
        appointment.time = req.body.time;
      }
      const appointment_update = await appointment.save();
  
      return res.json({
        success: true,
        messege: 'appointment update successfully',
        data: appointment_update,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'appointmente update failed',
      });
    }
  }


const appointment_delete = async (req: Request, res: Response) => {
  try {
    const delete_appointment = req.params.id;
    const appointmentDelete = await Appointment.delete(
      {
        id: parseInt(delete_appointment)
      }
    );
    if (appointmentDelete.affected) {
      return res.json(`appointment id: ${delete_appointment} has been successfully delete`);
    }
    return res.json('no data to delete');
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'has failed to eliminate'
    });
  }
}
export { appointment_create, appointments_get, appointment_update, appointment_delete };

