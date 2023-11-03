import express from "express";
import 'dotenv/config'
//import {  } from "";
import { router as customersRouter } from "./routes/customersRouter";
import { AppDataSource } from "./db";

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())

// routes
app.use('/customer', customersRouter)
/*app.use('/appointments', routerAppointment)
app.use('/tattoo_artist', routerTattoo_artists)*/

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    
    app.listen(PORT, () => {
      console.log(`Server running ${PORT}`);
    })
  })
  .catch(error => {
    console.log(error)
  })
  