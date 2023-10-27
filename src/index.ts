import express from "express";
import { AppDataSource } from "./db";


const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000


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
  