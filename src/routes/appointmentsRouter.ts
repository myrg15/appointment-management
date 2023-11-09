import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { appointment_create, appointments_get, appointment_update, appointment_delete } from "../controllers/appointmentsController";


const router = Router()


router.post('/appointment_create', appointment_create)
router.get('/appointments_get', auth, appointments_get)
router.post('/appointment_update', auth, appointment_update)
router.put('/appointment_delete', auth, appointment_delete)

export { router }






