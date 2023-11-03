import express from "express";
import 'dotenv/config'
//import {  } from "";
import { router as customersRouter } from "./routes/customersRouter";
import { AppDataSource } from "./db";

const app = express();
const PORT = process.env.PORT || 5000

app.use('/customer', customersRouter)

app.get('/', (req, res) => {
  res.send('Home Page Mery');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Servidor corre en puerto ${PORT}`);
});