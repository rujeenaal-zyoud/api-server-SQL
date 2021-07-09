'use strict';

require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT;
 const pool = require('./src/models/pool.js');

 //the pool it's insted of mongoose

  pool.connect()
   .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });