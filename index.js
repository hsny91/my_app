import { PORT} from './environment.js';

import express from 'express';
import cors from 'cors';
import path from 'path';


const __dirname = path.resolve();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, 'public', 'index.html'));
});

// start application
app.listen(+PORT, () => {
  console.log(`App listening on port ${PORT}`);
});