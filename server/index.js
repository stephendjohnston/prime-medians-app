import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
import { primeMedians } from './helpers/prime_medians.js';

app.use(cors()) // Use this after the variable declaration
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/primes', (req, res) => {
  let medians = primeMedians(Number(req.query.number));
  res.send(medians);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Express app is running on port ${port}`);
});