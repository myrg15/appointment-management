import express from 'express';
import 'dotenv/config'
import { routerAppointment } from './routes/appointmentsRouter';
import { router as customersRouter } from './routes/customersRouter';
import { router as tattooartistRouter } from './routes/tattooartistRouter';
import { AppDataSource } from './database';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/customer', customersRouter);
app.use('/artist', tattooartistRouter);
app.use('/appointment', routerAppointment)

app.get('/', (req, res) => {
  res.send('Home PageX');
});


AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {console.log(`Server running ${PORT}`);})
  })
  .catch(error => {
    console.log(error)
  })