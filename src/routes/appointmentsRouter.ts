import { Router } from "express";
//import { test } from "../controllers/appointmentsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

export {router}