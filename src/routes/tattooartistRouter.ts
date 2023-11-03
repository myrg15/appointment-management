import { Router } from "express";
//import { test } from "../controllers/tattooartistController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

export {router}