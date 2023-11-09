import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { login, getAllAppointment } from "../controllers/tattooartistController";
// import {create_appointment, update_appointment, delete_appointment, get_my_appointments} from "../controllers/tattooartistController";

const router = Router()


router.post('/login', login)
router.get('/getAllAppointments', auth, getAllAppointment)
/*router.post('/create_appointment', auth, create_appointment)
router.post('/update_appointment', auth, update_appointment)
router.put('/delete_appointment', auth, delete_appointment)
*/

export { router }