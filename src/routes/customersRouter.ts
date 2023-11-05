import { Router } from "express";
import { login, profile, register, update, create_appointment, update_appointment, delete_appointment, get_appointments, get_tattooartists } from "../controllers/customersController";
import { auth } from "../middlewares/auth";

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/update', update)
router.get('/profile', auth, profile)
router.post('/create_appointment', create_appointment)
//router.post('/create_appointment', auth, create_appointment)
router.post('/update_appointment', auth, update_appointment)
router.put('/delete_appointment', auth, delete_appointment)
router.put('/get_appointments', auth, get_appointments)
router.put('/get_tattooartists', auth, get_tattooartists)

export { router }