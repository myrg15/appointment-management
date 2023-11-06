import { Router } from "express";
import { login, profile, register, update, create_appointment, update_appointment, delete_appointment, get_my_appointments, get_tattooartists } from "../controllers/customersController";
import { auth } from "../middlewares/auth";

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/update', auth, update)
router.get('/profile', auth, profile)
router.post('/create_appointment', auth, create_appointment)
router.put('/update_appointment', auth, update_appointment) 
router.post('/delete_appointment', auth, delete_appointment)
router.get('/get_appointments', auth, get_my_appointments) 
router.get('/get_tattooartists', auth, get_tattooartists) 

export { router }