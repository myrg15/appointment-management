import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import {Customers} from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { time } from "console";
import { Timestamp } from "typeorm";
import { AppDataSource } from "../database";

const appointment_create = async (req: Request, res:Response) => {

    const token = req.headers.token;

    // create appointment / save base date
    const new_appointment = new Appointment();
    new_appointment.customers_id = req.token.id;
    new_appointment.tattooartist_id = req.body.tattooartist_id;
    new_appointment.date = new Date();
    new_appointment.sessions = req.body.sessions;
    new_appointment.availability = req.body.availability;
    new_appointment.time = req.body.time;
    await AppDataSource.manager.save(new_appointment);

    return res.json({
        success:true, 
        appointment:new_appointment});
}

const appointment_update = async (req: Request) => {
}

const appointment_delete = async (req: Request) => {
}

const appointment_get = async (req: Request) => {
}

export { appointment_create, appointment_update, appointment_delete, appointment_get };    

