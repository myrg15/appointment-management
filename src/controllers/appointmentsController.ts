import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import {Customers} from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { time } from "console";
import { Timestamp } from "typeorm";
import { AppDataSource } from "../database";

const appointment_create = async (req: Request, res:Response) => {

    const token = req.headers.token;

    // Crear una nueva cita y guardarla en la base de datos
    const new_appointement = new Appointment();
    new_appointement.customers_id = req.token.id;
    new_appointement.tattooartist_id = req.body.tattooartist_id;
    new_appointement.date = new Date();
    new_appointement.sessions = req.body.sessions;
    new_appointement.availability = req.body.availability;
    new_appointement.time = req.body.time;
    await AppDataSource.manager.save(new_appointement);

    return res.json({
        success:true, 
        appointment:new_appointement});
}

const appointment_update = async (req: Request) => {
}

const appointment_delete = async (req: Request) => {
}

const appointment_get = async (req: Request) => {
}

export { appointment_create, appointment_update, appointment_delete, appointment_get };    

