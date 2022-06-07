import 'reflect-metadata';
import express from 'express';
import './database/connection';
import path from 'path';

import routes from './routes';


import cors from 'cors';
const app = express();



// app.use('/files', express.static(path.join(__dirname, '/uploads', )));
// app.use('/files', express.static(path.resolve(__dirname, 'uploads' )));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'images_post')));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'images_blog')));

app.use(cors());

app.use(express.json());
app.use(routes);


app.listen(8080, () => { console.log('Servidor aberto na porta: 8080')});