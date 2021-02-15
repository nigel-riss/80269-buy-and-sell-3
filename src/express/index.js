'use strict';

const express = require(`express`);
const offerRoutes = require(`./routes/offer-routes.js`);


const DEFAULT_PORT = 8080;
const app = express();

app.use(`/offers`, offerRoutes);

app.listen(DEFAULT_PORT, () => {
  console.log(`Server runs on port: ${DEFAULT_PORT}`);
});