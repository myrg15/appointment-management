import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { login, getAllAppointment } from "../controllers/tattooartistController";

const router = Router()


router.post('/login', login)
router.get('/getAllAppointments', auth, getAllAppointment)
export { router }