/**/import { Response, Request } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../middlewares/auth";
import { getAppointmentTatto } from "../controllers/tattooartistController";
// import {create_appointment, update_appointment, delete_appointment, get_my_appointments} from "../controllers/tattooartistController";

const router = Router()


router.get('/get_my_appointments', auth, getAppointmentTatto)
/*router.post('/create_appointment', create_appointment)
//router.post('/create_appointment', auth, create_appointment)
router.post('/update_appointment', auth, update_appointment)
router.put('/delete_appointment', auth, delete_appointment)
*/

export { router }