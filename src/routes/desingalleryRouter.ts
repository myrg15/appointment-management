import { Router } from "express";
//import { test } from "../controllers/desingalleryController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

export {router}