import { Router } from "express";
import { register, login, profile, update, viewappointments } from "../controllers/customersController";
import { auth } from "../middlewares/auth";
import { existEmail } from "../middlewares/existEmailMiddleware";
import { appointments_get } from "../controllers/appointmentsController";

const router = Router()

router.post('/register',existEmail, register)
router.post('/login', login)
router.get('/profile', auth, profile)
router.post('/update', auth, update)
router.get('/viewappointments', auth, viewappointments)

export { router }