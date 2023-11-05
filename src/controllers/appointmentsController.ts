import { Response, Request } from "express";
import { Appointment } from "../models/Appointment";
import {Customers} from "../models/Customers";
import { Tattooartist } from "../models/Tattooartist";
import { time } from "console";
import { Timestamp } from "typeorm";
import { AppDataSource } from "../database";

const appointment_create = async (req: Request) => {
    // Crear una nueva cita y guardarla en la base de datos
    const new_appointement = new Appointment();
    new_appointement.date = req.body.date;
    new_appointement.sessions = '';
    new_appointement.availability = true,
    new_appointement.time = ''
    await AppDataSource.manager.save(new_appointement)
}

const appointment_update = async (req: Request) => {
}

const appointment_delete = async (req: Request) => {
}

const appointment_get = async (req: Request) => {
}

export { appointment_create, appointment_update, appointment_delete, appointment_get };    

